import React from 'react'
import Header from '../header/Header'
import styles from './layout.module.css'

const Layout = props => (
    <div className={styles.container}>
        <div className={styles.content}>
            <Header />
            {props.children}
        </div>
    </div>
)

export default Layout