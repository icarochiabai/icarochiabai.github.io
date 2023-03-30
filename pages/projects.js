import Head from 'next/head'
import styles from '../styles/projects.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Fractal from '../components/sketch/fractal'
import TextCard from '@/components/textcard'

export default function Projects() {
  return (
    <>
      <div className={styles.box}>
        <TextCard
          title="Projetos" 
          content=
          <>
            <p>
              Como programador, estou sempre trabalhando em projetos para aprimorar minhas habilidades e ampliar meu conhecimento em diferentes áreas.
            </p>
            <p>
              Um dos meus projetos recentes foi um aplicativo de gerenciamento de tarefas, que desenvolvi usando React e Firebase. Eu queria criar uma interface intuitiva e fácil de usar para gerenciar tarefas pessoais, então me concentrei no design de interface e na experiência do usuário. O projeto me permitiu aprimorar minhas habilidades em desenvolvimento front-end, além de me dar uma compreensão mais aprofundada de como os aplicativos de gerenciamento de tarefas funcionam.
            </p>
            <p>
              Também participei de um projeto de automação de processos de negócios para uma pequena empresa. Usando Python e a biblioteca PyAutoGUI, desenvolvemos um programa para automatizar uma série de tarefas manuais repetitivas, economizando tempo e reduzindo erros humanos. Foi uma experiência gratificante trabalhar em um projeto que realmente beneficiou os usuários finais e melhorou a eficiência geral do negócio.
            </p>
            <p>
              Esses são apenas alguns dos projetos em que trabalhei como programador. Cada projeto é uma oportunidade para aprender algo novo e aprimorar minhas habilidades, e estou sempre animado para explorar novas áreas e tecnologias para desenvolver soluções criativas e eficazes para os problemas que enfrentamos na programação.
              <span className={utilStyles.blink}>|</span>
            </p>
          </>
          
        />
      </div>
    </>
  )
}