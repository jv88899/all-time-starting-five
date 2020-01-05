import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => (
    <nav className={styles.container}>
        <div className={styles.branding}>
            <div className={styles.brandingMainText}>
                ATSF
            </div>
        </div>
        <div className={styles.navMenu}>
            <div className={styles.navMenuBar}></div>
            <div className={styles.navMenuBar}></div>
            <div className={styles.navMenuBar}></div>
        </div>
    </nav>
)

export default Navbar