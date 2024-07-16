import Image from 'next/image';
import animalCrossingLogo from '@public/images/Animal_Crossing_Logo.png';
import styles from './Logo.module.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={animalCrossingLogo}
        alt="Animal Crossing Logo"
        className={styles.logo}
      />
    </Link>
  );
}
