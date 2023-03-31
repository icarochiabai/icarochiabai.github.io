import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.box}>
            <p><q>A vida é muito curta para escrever código chato.</q></p>
            <p><i className="fa-solid fa-location-dot"></i> Campinas - SP, Brasil</p>
        </div>
    )
}