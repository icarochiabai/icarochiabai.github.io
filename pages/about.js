import Head from 'next/head'
import styles from '../styles/about.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Fractal from '../components/sketch/fractal'
import TextCard from '../components/textcard'

export default function About() {
  return (
    <>
      <TextCard
        title="Ícaro Chiabai"
        content=
        <>
          <p>Sou um programador apaixonado por <span className={utilStyles.highlight}>código criativo</span>, <span className={utilStyles.highlight}>design</span> e <span className={utilStyles.highlight}>software livre</span>. Estou constantemente buscando novas formas de unir minha paixão pela tecnologia com minha curiosidade pela arte e pelo design. Atualmente, estudo <span className={utilStyles.highlight}>Engenharia de Computação</span> na <span className={utilStyles.highlight}>Unicamp</span>, onde tenho a oportunidade de aprimorar minhas habilidades e explorar novas possibilidades dentro do mundo da programação.</p>
          <p>Além disso, sou um defensor fervoroso do <span className={utilStyles.highlight}>software livre</span> e acredito que a liberdade e a transparência são essenciais para o futuro da tecnologia. Sempre estou em busca de novos desafios e projetos que possam me ajudar a crescer como programador e como pessoa.</p>
          <p>Meus interesses futuros estão relacionados à <span className={utilStyles.highlight}>biologia</span> e à <span className={utilStyles.highlight}>bioinformática</span>, áreas que me fascinam por sua combinação única de ciência e tecnologia. Possuo um <span className={utilStyles.highlight}>curso técnico em biotecnologia</span>, o que me deu uma base sólida em <span className={utilStyles.highlight}>biologia molecular</span> e em <span className={utilStyles.highlight}>técnicas laboratoriais</span>.</p>
          <p>Estou sempre em busca de novos desafios e oportunidades de aprendizado, e estou aberto a explorar novas áreas e tecnologias que possam me ajudar a expandir meus horizontes. Meus interesses em <span className={utilStyles.highlight}>automação</span> e <span className={utilStyles.highlight}>front-end</span> também me permitem abordar projetos que envolvam a <span className={utilStyles.highlight}>interação humano-computador</span>, além de <span className={utilStyles.highlight}>automatização de processos de trabalho</span>. Estou animado para ver onde esses interesses e habilidades podem me levar no futuro e estou ansioso para <span className={utilStyles.highlight}>contribuir</span> para o mundo da tecnologia de maneiras novas e emocionantes.</p>
        </>
      />
    </>
  )
}