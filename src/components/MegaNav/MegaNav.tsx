import Link from 'next/link';
import styles from './MegaNav.module.css';
import List from '@src/components/List/List';

//TODO: Add more links to the MegaNav
//Ask chris if using MDX would be a good idea here for the MegaNav

export default function MegaNav() {
  return (
    <nav className={styles.nav}>
      <List
        list={[
          //   { name: 'Home', link: '/' },
          { name: 'About', link: '/about' } /* About Animal Crossing? */,
          { name: 'Events', link: '/events' } /* Birthdays, Events, Holidays */,
          { name: 'Villagers', link: '/villagers' } /* Villagers, Special Characters */,
          { name: 'Museum', link: '/museum' } /* Sea Creatures, Fish, Fossils , Bug*/,
          { name: 'Items', link: '/items' } /* Furniture, Clothing, DIYs, Art */,
          { name: 'Contact', link: '/contact' } /*Opens a contact form page */,
        ]}
      />
    </nav>
  );
}
