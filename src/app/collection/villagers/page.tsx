import styles from './page.module.css';
import { Header, Footer } from '@components';

import { CheckboxGroup } from '@radix-ui/themes';

export default function CollectionPage() {
  /* TO DO */
  // Create a checkbox Group for the following:
  // species, personality, gender, birthday_month, sign
  return (
    <main className={'page-margin'}>
      {/* Animal Crossing Announcement Bar */}
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

      <Footer />
    </main>
  );
}
