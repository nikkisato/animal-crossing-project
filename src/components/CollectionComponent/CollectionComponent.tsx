import CollectionList from '@src/components/CollectionList/CollectionList';
import CollectionFilter from '@src/components/CollectionFilter/CollectionFilter';

import { useState } from 'react';

/* MAIN COMPONENT */

export default function CollectionComponent({ initialData }) {
  /* Set up Filterd State here */
  const [filteredData, setFilteredData] = useState(initialData);

  console.log('initialData', initialData);
  /* handleFilter Function */
  // function handleFilteredDataUpdate(gender, species, personality, sign, birthday_month) {
  //   let updatedData = initialData;

  //   /* In my head it's gonna be like this */
  //   return (updatedData = updatedData.filter(updatedData.gender));
  // }

  /* Update the Filtered Data */
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [personality, setPersonality] = useState('');
  const [sign, setSign] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');

  function handleGenderUpdate(newGender: string) {
    setGender(newGender);
  }

  function handleSpeciesUpdate(newSpecies: string) {
    setSpecies(newSpecies);
  }

  function handlePersonalityUpdate(newPersonality: string) {
    setPersonality(newPersonality);
  }

  function handleSignUpdate(newSign: string) {
    setSign(newSign);
  }

  function handleBirthdayMonthUpdate(newBirthdayMonth: string) {
    setBirthdayMonth(newBirthdayMonth);
  }

  return (
    <div>
      <CollectionFilter filteredData={filteredData} />
      <CollectionList filteredData={filteredData} />
    </div>
  );
}
