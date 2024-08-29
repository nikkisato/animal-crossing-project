import styles from './page.module.css';
import { Header, Footer } from '@components';

import fetchAllVillagers from '@src/utils/fetchAllVillagers';
import CollectionComponent from '@src/components/CollectionComponent/CollectionComponent';
/* PAGE COMPONENT */
/**
 *
 * Initial Data from the Nookpedia API returns an array
 */

export default function Home() {
  /* Set up Initial Data from Nookpedia API */
  const initialData = fetchAllVillagers();

  if (!initialData) {
    return <div>Loading...</div>;
  }

  return (
    <main className={'page-margin'}>
      <Header />
      {initialData && <CollectionComponent initialData={initialData} />}
      <Footer />
    </main>
  );
}
