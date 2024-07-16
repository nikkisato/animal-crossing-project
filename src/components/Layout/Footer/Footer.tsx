import styles from './Footer.module.css';
import { Copyright } from '@src/components/Copyright';
import { Logo } from '@components/Logo';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import List from '@src/components/List/List';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <List
          list={[
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' },
            { name: 'Projects', link: '/projects' },
            { name: 'Contact', link: '/contact' },
          ]}
        />
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.social}>
        <Link href="https://github.com/nikkisato">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/nikkisato/">
          <LinkedInIcon />
        </Link>
        <Link href="https://twitter.com/nikkisatodev">
          <XIcon />
        </Link>
      </div>
      <div className={styles.copyright}>
        <Copyright />
      </div>
    </footer>
  );
}
