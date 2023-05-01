import styles from "./layout.module.css";
import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <main className={styles.content}>{children}</main>
        </>
    );
}
