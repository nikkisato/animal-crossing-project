'use client';

import CollectionList from '@src/components/CollectionList/CollectionList';
import CollectionFilter from '@src/components/CollectionFilter/CollectionFilter';

import { useState } from 'react';

import { AnimalCrossingVillager } from '@src/utils/AllVillagersProps';
/* MAIN COMPONENT */

interface Props {
  initialData: AnimalCrossingVillager[];
}

interface FilterArgs {
  gender: string;
  species: string;
  personality: string;
  sign: string;
  birthdayMonth: string;
}

export default function CollectionComponent({ initialData }: Props) {
  /* Set up Filterd State here */
  const [filteredData, setFilteredData] = useState(initialData);

  /* Update the Filtered Data */
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [personality, setPersonality] = useState('');
  const [sign, setSign] = useState('');
  const [birthdayMonth, setBirthdayMonth] = useState('');

  /* handleFilter Function */
  function handleFilteredDataUpdate({
    gender,
    species,
    personality,
    sign,
    birthdayMonth,
  }: FilterArgs) {
    // the filteredData is gonna coming in as an array of objects, so we need to get the initialData lowerCase and filter it
    const updatedData = filteredData
      .filter((item) => {
        if (gender === 'all') return true;
        return item.gender === gender;
      })
      .filter((item) => {
        if (species === 'all') return true;
        return item.species === species;
      })
      .filter((item) => {
        if (personality === 'all') return true;
        return item.personality === personality;
      })
      .filter((item) => {
        if (sign === 'all') return true;
        return item.sign === sign;
      })
      .filter((item) => {
        if (birthdayMonth === 'all') return true;
        return item.birthday_month === birthdayMonth;
      });

    /* quality check */

    /* Method filter returns a new object */

    /* In my head it's gonna be like this */

    setFilteredData(updatedData);
  }

  function handleGenderUpdate(newGender: string) {
    setGender(newGender);
    handleFilteredDataUpdate({ gender: newGender, species, personality, sign, birthdayMonth });
  }

  function handleSpeciesUpdate(newSpecies: string) {
    setSpecies(newSpecies);
    handleFilteredDataUpdate({ gender, species: newSpecies, personality, sign, birthdayMonth });
  }

  function handlePersonalityUpdate(newPersonality: string) {
    setPersonality(newPersonality);
    handleFilteredDataUpdate({ gender, species, personality: newPersonality, sign, birthdayMonth });
  }

  function handleSignUpdate(newSign: string) {
    setSign(newSign);
    handleFilteredDataUpdate({ gender, species, personality, sign: newSign, birthdayMonth });
  }

  function handleBirthdayMonthUpdate(newBirthdayMonth: string) {
    setBirthdayMonth(newBirthdayMonth);
    handleFilteredDataUpdate({
      gender,
      species,
      personality,
      sign,
      birthdayMonth: newBirthdayMonth,
    });
  }

  return (
    <div>
      <h1>Collection Component </h1>
      <CollectionFilter
        initialData={initialData}
        handleGenderUpdate={handleGenderUpdate}
        gender={gender}
        handleSpeciesUpdate={handleSpeciesUpdate}
        species={species}
        handlePersonalityUpdate={handlePersonalityUpdate}
        personality={personality}
        handleSignUpdate={handleSignUpdate}
        sign={sign}
        handleBirthdayMonthUpdate={handleBirthdayMonthUpdate}
        birthdayMonth={birthdayMonth}
      />

      {/* <CollectionList filteredData={filteredData} /> */}
    </div>
  );
}
