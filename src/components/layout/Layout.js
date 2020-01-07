import React from 'react'
import Header from '../header/Header'
import styles from './layout.module.css'

const Layout = props => (
    <div className={styles.container}>
        <Header />
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
)

export default Layout