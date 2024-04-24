+++
title = 'Instalando MINIX usando QEMU no ArchLinux'
date = 2024-04-24T17:27:02-03:00
draft = false
tags = ['minix', 'qemu', 'archlinux']
+++

Tô fazendo isso por causa da disciplina MC504 - Sistemas Operacionais :skull:

## Instalando pacotes

Pacotes necessários: 

* __qemu-base__: responsável por rodar a máquina virtual com MINIX dentro
* __tigervnc__: responsável por deixar a gente ver o que tá acontecendo na máquina virtual

```fish
sudo pacman -Syu qemu-base tigervnc # instala os pacotes necessários
```

## Preparando a imagem do MINIX

1. Baixar a [imagem](http://download.minix3.org/iso/snapshot/).

```fish
bunzip2 nome_da_imagem # descompacta a imagem em um arquivo .iso
```

## Preparando a máquina virtual

```fish
qemu-img create -f raw nome_da_imagem 10G # cria um espaço de 10G para o QEMU utilizar
```

```fish
qemu-system-x86_64 -m 2G -cdrom caminho/pra/iso -boot order=d -drive file=nome_da_imagem,format=raw # boota a máquina com a iso selecionada
```

Agora a mensagem "VNC server running on ::1:5900" deve aparecer, isso significa que podemos nos conectar à máquina usando um VNC viewer, nesse caso, o __tigervnc__.

## Conectando na máquina

```fish
vncviewer :5900 # ou a porta que for exibida na mensagem
```

## Instalando o MINIX

```fish
login: root # entra no sistema operacional
```

```fish
setup # começa o processo de instalação
```

Agora não tem erro, só seguir os passos da instalação.

```fish
poweroff # executar depois que a instalação for concluída
```

## Configurando o MINIX

```fish
qemu-system-x86_64 -drive file=minix.raw,format=raw # boota a máquina virtual
```

```fish
login: root

passwd # cria uma senha para a máquina
pkgin update # aparentemente pkgin é o gerenciador de pacotes do MINIX
pkgin install openssh # instala o openssh
cp /usr/pkg/etc/rc.d/sshd /etc/rc.d/ # configura o openssh
printf 'sshd=YES\n' >> /etc/rc.conf # configura o openssh 
pkgin install vim # instala um editor de texto
vim /usr/pkg/etc/ssh/sshd_config # PermitRootLogin yes
/etc/rc.d/ssh/start # inicia o ssh
reboot # reinicia a máquina
pkgin_sets # instala pacotes base
```

É recomendado fazer um __snapshot__ da máquina nesse estado.

## Criando uma snapshot no QEMU

```fish
qemu-img convert -f raw -O qcow2 minix.raw minix_backup.qcow2 # converte para o formato qcow2
```

```fish
qemu-img create -f qcow2 -b minix_backup.img -F qcow2 minix_snapshot.img # cria a snapshot
```

```fish
qemu-system-x86_64 -drive file=minix_snapshot.img,format=qcow2
```

Fim.
