import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = ({ isDarkTheme, toggleTheme }) => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <div className={styles['theme-switcher']}>
                <div className={styles['switch']} onClick={toggleTheme}>
                    <span className={`${styles['slider']} ${isDarkTheme ? styles['slider-dark'] : styles['slider-light']}`}></span>
                </div>
                <span className={styles['theme-label']}>
                    {isDarkTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </span>
                </div>
            </nav>
        </header>
    );
};

export default Header;