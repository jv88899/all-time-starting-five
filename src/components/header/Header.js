import React from 'react'
import Navbar from '../navbar/Navbar'
import styles from './header.module.css'

const Header = () => (
    <header
        className={styles.containerFull}
    >
        <Navbar />
    </header>
)

export default Header