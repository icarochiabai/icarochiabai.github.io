import Navbar from './navbar'
import Footer from './footer'
import styles from './layout.module.css'

export default function Layout ({ children }) {
    return (
            <div className={styles.box}>
                <Navbar />
                <main id="content" className={styles.content}>{ children }</main>
                <Footer />
            </div>
    )
}
