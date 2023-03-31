import styles from './navbar.module.css'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

export default function Navbar() {
    const [isActive, setActive] = useState(false)
    let displayHeader = false
    
    const onScroll = () => {
        if(window.scrollY > 600) {
            setActive(true)
        } else {
            setActive(false)
        }
    }
    
    useEffect( () => {
        window.addEventListener("scroll", onScroll, { passive: true})
    })
    
    return (
        <nav className={`${styles.navbar} ${isActive ? styles.show : styles.hidden}`}>
            <h1>Header</h1>
        </nav>
    )
}