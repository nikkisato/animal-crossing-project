import styles from './page.module.css';
import { Header, Footer } from '@components';

import CardComponent from '@src/components/Card/Card';
import { AnimalCrossingVillager } from '@src/utils/AllVillagersProps';

import { Grid, CheckboxGroup } from '@radix-ui/themes';

import fetchAllVillagers from '@src/utils/fetchAllVillagers';

export default async function CollectionPage() {
  /* TO DO */
  // Create a checkbox Group for the following:
  // species, personality, gender, birthday_month, sign

  // const villagers = await fetchAllVillagers();

  return (
    <main className={'page-margin'}>
      <Header />
      <h1>Collection Villagers</h1>

      {/* <CheckboxGroup.Root
        defaultValue={['1']}
        name="villager"
      >
        <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
        <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
      </CheckboxGroup.Root> */}

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

      <Footer />
    </main>
  );
}
