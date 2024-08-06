'use client';

import styles from './page.module.css';
import { Header, Footer } from '@components';
import CardComponent from '@src/components/Card/Card';
import { AnimalCrossingVillager } from '@src/utils/AllVillagersProps';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import * as Checkbox from '@radix-ui/react-checkbox';

import fetchAllVillagers from '@src/utils/fetchAllVillagers';
import CollectionComponent from '@src/components/CollectionComponent/CollectionComponent';
/* PAGE COMPONENT */
/**
 *
 * Initial Data from the Nookpedia API returns an array
 */

export default async function Home() {
  /* Set up Initial Data from Nookpedia API */
  const initialData = await fetchAllVillagers();

  if (!initialData) {
    return <div>Loading...</div>;
  }

  return (
    <main className={'page-margin'}>
      <Header />
      <CollectionComponent initialData={initialData} />
      <Footer />
    </main>
  );
}
