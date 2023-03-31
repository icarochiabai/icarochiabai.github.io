import styles from '../styles/experience.module.css'
import utilStyles from '../styles/utils.module.css'
import ExperienceQuote from '@/components/experiencequote'
import Link from 'next/link'


export default function Experience() {
  return (
    <div className={`${styles.box} ${utilStyles.blur}`}>
      <h1>formação acadêmica</h1>
      <ExperienceQuote
        nome="Graduação em Engenharia de Computação"
        lugar="Universidade Estadual de Campinas"
        inicio="abr. 2021"
        fim="atualmente"
      />
      <ExperienceQuote
        nome="Curso Técnico em Biotecnologia"
        lugar="Instituto Federal do Espírito Santo"
        inicio="jan. 2017"
        fim="dez. 2019"
      />
      <h1>projetos & pesquisas</h1>
      <ExperienceQuote
        nome="Um estudo computacional de um modelo de equação diferencial pseudo-parabólico não linear para aperfeiçoar o reconhecimento de texturas em imagens"
        lugar="PICME-IC"
        inicio="mar. 2022"
        fim="mar. 2023"
      />
      <ExperienceQuote
        nome="Sistemas Dinâmicos e Pensamento Matemático"
        lugar="PICME-IC"
        inicio="ago. 2021"
        fim="mar. 2022"
        pub=
        <>
          <Link href="https://icarochiabai.github.io/Sistemas-Dinamicos/" target="_blank">Simulações</Link>.
        </>
      />
      <ExperienceQuote
        nome="Educação Estatística para a saúde: discussões a partir das tabelas nutricionais de alimentos"
        lugar="PIBIC-Jr"
        inicio="ago. 2018"
        fim="ago. 2019"
        pub=
        <>
        <Link href="https://www.researchgate.net/publication/339051244_Um_material_educativo_para_abordagem_de_Tratamento_da_Informacao_a_partir_da_tabela_nutricional_de_alimentos" target="_blank">Publicação (Qualis Capes A2) </Link>
        ;
        <Link href="https://periodicos.unespar.edu.br/index.php/rpem/article/view/6290" target="_blank"> Publicação (Qualis Capes B1)</Link>
        .
        </>
      />
    </div>
  )
}