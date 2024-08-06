import CheckBoxIcon from '@mui/icons-material/CheckBox';
import * as Checkbox from '@radix-ui/react-checkbox';

export default function CollectionFilter({ filteredData }) {
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
        {/* rendered the filtered Data Here  */}

        {filteredData &&
          filteredData.map((item) => {
            return (
              <Checkbox.Root
                key={item.id}
                className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
                defaultChecked
                id="c1"
              >
                <div>
                  <Checkbox.Indicator className="text-violet11">
                    <CheckBoxIcon />
                  </Checkbox.Indicator>
                  <label
                    className="pl-[15px] text-[15px] leading-none text-white"
                    htmlFor="c1"
                  >
                    {item.name}
                  </label>
                </div>
              </Checkbox.Root>
            );
          })}
      </div>
    </form>
  );
}
