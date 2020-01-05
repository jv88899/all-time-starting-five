import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => (
    <nav className={styles.container}>
        <div className="branding"></div>
        <div className="nav-menu"></div>
    </nav>
)

export default Navbar