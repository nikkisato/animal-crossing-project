// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>Menu Icon{/* // Menu Icon */}</div>
      <div className={styles.logo}>Logo{/* // Logo */}</div>
      <div className={styles.search}>Search Icon{/* // Search Icon This opens a Modal */}</div>
    </header>
  );
}

export default Header;
