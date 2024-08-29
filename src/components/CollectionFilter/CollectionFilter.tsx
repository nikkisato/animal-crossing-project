import CheckBoxIcon from '@mui/icons-material/CheckBox';
import * as Checkbox from '@radix-ui/react-checkbox';
import { AnimalCrossingVillager } from '@src/utils/AllVillagersProps';

import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  initialData: AnimalCrossingVillager[];
  gender: string;
  species: string;
  personality: string;
  sign: string;
  birthdayMonth: string;
  handleGenderUpdate: (gender: string) => void;
  handleSpeciesUpdate: (species: string) => void;
  handlePersonalityUpdate: (personality: string) => void;
  handleSignUpdate: (sign: string) => void;
  handleBirthdayMonthUpdate: (birthdayMonth: string) => void;
}

export default function CollectionFilter({
  initialData,
  gender,
  species,
  personality,
  sign,
  birthdayMonth,
  handleGenderUpdate,
  handleSpeciesUpdate,
  handlePersonalityUpdate,
  handleSignUpdate,
  handleBirthdayMonthUpdate,
}: Props) {
  /*Filtered Data is being passed from Page */
  /* This is the Filter Selection */
  /* NO STATE */

  /* display just the forms 
  needs to know initial Data, to be able to populate the checkboxes
  species, species.length > 0 
  form values 
  onChange
  Have an all checkbox  to select all options 
  */

  return (
    <form>
      <div className="flex items-center">
        <Select.Root>
          <Select.Trigger aria-label="Gender">
            <Select.Value placeholder="Select a Gender" />
            <Select.Icon className="text-violet11">
              <ExpandMoreIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Viewport className="p-[5px]">
                <Select.Group>
                  <Select.Item value="male">Male</Select.Item>
                  <Select.Item value="female">Female</Select.Item>
                  <Select.Item value="all">All</Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </form>
  );
}
