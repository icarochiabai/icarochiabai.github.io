import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.box}>
            <p>"A vida é muito curta para escrever código chato."</p>
            <p><i class="fa-solid fa-location-dot"></i> Campinas - SP, Brasil</p>
        </div>
    )
}