'use client';

import CollectionList from '@src/components/CollectionList/CollectionList';
import CollectionFilter from '@src/components/CollectionFilter/CollectionFilter';

import { useState } from 'react';

/* MAIN COMPONENT */

export default function CollectionComponent({ initialData }) {
  /* Set up Filterd State here */
  const [filteredData, setFilteredData] = useState(initialData);

  /* Update the Filtered Data */
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [personality, setPersonality] = useState('');
  const [sign, setSign] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');

  /* handleFilter Function */
  function handleFilteredDataUpdate({ gender, species, personality, sign, birthday_month }) {
    // initialData.Object.keys()

    // the initialData is gonna coming in as an array of objects, so we need to get the initialData lowerCase and filter it
    initialData
      .toLowerCase()
      .filter(gender)
      .filter(species)
      .filter(personality)
      .filter(sign)
      .filter(birthday_month);

    /* In my head it's gonna be like this */

    const filteredDataUpdate = setFilteredData(initialData);

    return filteredDataUpdate;
  }

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
      <h1>Collection Component </h1>
      {/* <CollectionFilter filteredData={filteredData} />
      <CollectionList filteredData={filteredData} /> */}
    </div>
  );
}
