import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.box}>
            <section className={styles.left}>
                <h1>Vamos nos conectar!</h1>
            </section>
            <section className={styles.right}>
                <blockquote>
                    <p><q><i>Programação é como criar arte em um mundo digital, onde a tinta são linhas de código e a imaginação é a chave para desbloquear seu verdadeiro potencial.</i></q></p>
                </blockquote>
                <div>
                    <h4>Música favorita (atual)</h4>
                    <Image 
                    alt="Spotify code for current favorite track"
                    src="/images/spcode.svg"
                    width={256}
                    height={64}
                    />
                </div> 
            </section>
        </div>
    )
}