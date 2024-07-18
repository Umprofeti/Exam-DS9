import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <header className={`${styles['navbar-bg']} flex justify-between items-center p-5 rounded-full gap-5 fixed top-4 left-0 right-0 z-10`}>
            <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
            <div className="text-[2rem]">
                <Link to="/" className={`text-customYellow font-lily ${styles.link}`} activeClassName={styles.activeLink}>
                    Groovy
                </Link>
            </div>

            <nav className="flex space-x-9 ml-auto text-[2rem]">
                <Link to="/" className={`text-customYellow hover:text-customvino font-lily ${styles.link}`} activeClassName={styles.activeLink}>
                    Inicio
                </Link>
                <Link to="/components/MusicGenres" className={`text-customYellow hover:text-customvino font-lily ${styles.link}`} activeClassName={styles.activeLink}>
                    Géneros
                </Link>
                <Link to="/pages/Personaliza" className={`text-customYellow hover:text-customvino font-lily ${styles.link}`} activeClassName={styles.activeLink}>
                    Personalizar
                </Link>
            </nav>
            <Link to="/pages/formulario" className="sidebar-link">
            <FontAwesomeIcon icon={faSignInAlt} style={{ color: '#F1A512', fontSize: '24px' }} />
          </Link></header>
    );
};

export default Navbar;
