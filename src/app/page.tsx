import styles from './page.module.css';
import { Header, Footer } from '@components';
import CardComponent from '@src/components/Card/Card';
import { AnimalCrossingVillager } from '@src/utils/AllVillagersProps';

import { Grid } from '@radix-ui/themes';

import fetchAllVillagers from '@src/utils/fetchAllVillagers';

export default async function Home() {
  // const villagers = await fetchAllVillagers();

  return (
    <main className={'page-margin'}>
      {/* Animal Crossing Announcement Bar */}
      <Header />
      {/* <Grid
        columns="3"
        gap="3"
        rows="repeat(2, 64px)"
        width="auto"
      >
        {villagers.map((villager: AnimalCrossingVillager) => {
          return (
            <CardComponent
              key={villager.id}
              villager={villager}
            />
          );
        })}
      </Grid> */}

      {/* Animal crossing Hero  */}
      {/* Animal Crossing Carousel */}
      {/* Animal Crossing Items */}
      {/* Animal Crossing Villagers */}
      {/* Animal Crossing Dates/Events */}
      <Footer />
    </main>
  );
}
