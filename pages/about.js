import styles from '../styles/about.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.verticalBox}>
      <div className={styles.box}>
        <div className={`${styles.left} ${utilStyles.blur}`}>
          <Image
            alt="my picture" 
            src="/images/profile.jpg"
            width={460}
            height={460}
          />
        </div>
        <div className={`${styles.right} ${utilStyles.blur}`}>
          <h1><span className={utilStyles.highlight}>Ícaro</span> Chiabai</h1>
          <div className={styles.listBox}>
            <ul>
              <li><i className="fa-solid fa-graduation-cap"></i> Engenharia de Computação</li>
              <li><i className="fa-solid fa-microscope"></i> Biotecnólogo</li>
              <li><i className="fa-solid fa-newspaper"></i> Bolsista CNPq</li>
            </ul>
            <ul>
              <li><i className="fa-solid fa-people-group"></i> Membro do <Link target="_blank" href="https://lkcamp.dev">LKCamp</Link></li>
              <li><i className="fa-solid fa-music"></i> <Link href="https://open.spotify.com/track/1BCkFsuH6Mgk7tLWan97C3?si=374dd884f2994c5b" target="_blank">Nuvens Tóxicas</Link></li>
              <li><i className="fa-brands fa-github"></i> <Link href="https://github.com/icarochiabai/icarochiabai.github.io" target="_blank">Este site</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.under} ${utilStyles.blur}`}>
        <p>
          Sou um programador apaixonado por <span className={utilStyles.highlight}>código criativo</span>, <span className={utilStyles.highlight}>design</span> e <span className={utilStyles.highlight}>software livre</span>. Estou constantemente buscando novas formas de unir minha paixão pela tecnologia com minha curiosidade pela arte e pelo design. Atualmente, estudo <span className={utilStyles.highlight}>Engenharia de Computação</span> na <span className={utilStyles.highlight}>Unicamp</span>, onde tenho a oportunidade de aprimorar minhas habilidades e explorar novas possibilidades dentro do mundo da programação. Além disso, sou um defensor fervoroso do <span className={utilStyles.highlight}>software livre</span>, participo do grupo de estudo de Linux da Unicamp e acredito que a liberdade e a transparência são essenciais para o futuro da tecnologia. Sempre estou em busca de novos desafios e projetos que possam me ajudar a crescer como programador e como pessoa.
        </p>
        <p>
          Meus interesses futuros estão relacionados à <span className={utilStyles.highlight}>biologia</span> e à <span className={utilStyles.highlight}>bioinformática</span>, áreas que me fascinam por sua combinação única de ciência e tecnologia. Possuo um <span className={utilStyles.highlight}>curso técnico em biotecnologia</span>, o que me deu uma base sólida em biologia molecular e em técnicas laboratoriais. Além disso, estou sempre em busca de novos desafios e oportunidades de aprendizado, e estou aberto a explorar novas áreas e tecnologias que possam me ajudar a expandir meus horizontes. Meus interesses em <span className={utilStyles.highlight}>automação</span> e <span className={utilStyles.highlight}>front-end</span> também me permitem abordar projetos que envolvam a <span className={utilStyles.highlight}>interação humano-computador</span>, além de <span className={utilStyles.highlight}>automatização de processos</span> de trabalho. Estou animado para ver onde esses interesses e habilidades podem me levar no futuro e estou ansioso para contribuir para o mundo da tecnologia de maneiras novas e emocionantes.
        </p>
      </div>
    </div>
  )
}