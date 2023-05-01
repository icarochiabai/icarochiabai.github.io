import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <h1>icarus</h1>
            <input type="checkbox" id="nav-toggle" />
            <label for="nav-toggle">
                <i class="fa-sharp fa-solid fa-bars"></i>
            </label>
            <nav>
                <ul>
                    <li>
                        <a href="">Posts</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
