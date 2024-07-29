import styles from './page.module.css';
import { Header, Footer } from '@components';
import { AnimalCrossingVillager } from '@src/utils/AllVillagersProps';

import fetchAllVillagers from '@src/utils/fetchAllVillagers';

export default function Home() {
  const villagers = fetchAllVillagers();

  console.log('villagers', villagers);

  return (
    <main className={'page-margin'}>
      {/* Animal Crossing Announcement Bar */}
      <Header />

      {/* Animal crossing Hero  */}
      {/* Animal Crossing Carousel */}
      {/* Animal Crossing Items */}
      {/* Animal Crossing Villagers */}
      {/* Animal Crossing Dates/Events */}
      <Footer />
    </main>
  );
}
