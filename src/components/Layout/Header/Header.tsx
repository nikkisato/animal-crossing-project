// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import { Logo } from '@components';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { MegaNav } from '@components';

import Button from '@mui/material/Button';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        {/* Show only on Mobile
        <Button>
          <MenuIcon />
        </Button> */}
        {/* Show only on Desktop */}
        <MegaNav />
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.search}>
        <Button>
          <SearchIcon />
        </Button>
        {/* // Search Icon This opens a Modal */}
      </div>
    </header>
  );
}

export default Header;
