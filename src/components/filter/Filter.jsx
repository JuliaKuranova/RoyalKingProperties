import { useState } from 'react';
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import { Dropdown } from 'primereact/dropdown'
import { MultiSelect } from 'primereact/multiselect';


const items = [
  {
    rooms: 3,
    type: 'Apartments',
    price: 1000000,
    stage: 'ready'
  },
  {
    rooms: 1,
    type: 'Apartments',
    price: 2000000,
    stage: 'ready'
  },
  {
    rooms: 'Studio',
    type: 'Villa',
    price: 1005000,
    stage: 'ready'
  },
  {
    rooms: 3,
    type: 'Penthouse',
    price: 6000000,
    stage: 'ready'
  },
  {
    rooms: 3,
    type: 'Villa',
    price: 2000000,
    stage: 'ready'
  }
]

export default function Filter(props) {
  function filterItems() {
    const keys = ['type', 'rooms']
    const keysRanges = ['price', 'square']
    let result = [...items];

    keys.forEach(key => {
      if (filterOptions[key].length) {
        result = result.filter(item => filterOptions[key].includes(item[key]));
      }
    });

    console.log(result)

    return result;
  }

  const [filterOptions, setFilterOptions] = useState({
    type: [],
    rooms: []
  });

  const apartmentTypes = [
    { label: 'Apartments', value: 'Apartments' },
    { label: 'Villa', value: 'Villa' },
    { label: 'Penthouse', value: 'Penthouse' }
  ];
  const bedrooms = [
    { label: 'Studio', value: 'Studio' },
    { label: '1 Bedroom', value: 1 },
    { label: '2 Bedroom', value: 2 },
    { label: '3 Bedroom', value: 3 },
    { label: '4 Bedroom', value: 4 },
    { label: '5 Bedroom', value: 5 },
  ];

  const options = [
    { label: 'Thing 1', value: 1 },
    { label: 'Thing 2', value: 2 },
  ];

  return (
    <div className="filter">
      <MultiSelect
        value={filterOptions.type}
        onChange={(event) => { setFilterOptions({ ...filterOptions, type: event.value }); console.log(event.value) }}
        options={apartmentTypes}
        placeholder="Select Cities"
        className="w-full md:w-20rem"
      />

      <MultiSelect
        value={filterOptions.rooms}
        onChange={(event) => { setFilterOptions({ ...filterOptions, rooms: event.value }); console.log(event.value) }}
        options={bedrooms}
        placeholder="Select Bedrooms"
        className="w-full md:w-20rem"
      />

      {/* <Dropdown
        options={apartmentTypes}
        onChange={(event) => { console.log(event.value) }}
        value={apartmentTypes[0]}
      />

      <Dropdown
        options={bedrooms}
        onChange={(event) => { console.log(event.value) }}
        value={bedrooms[0]}
      /> */}

      <button onClick={() => {filterItems()}}>Tmp button</button>
    </div>
  );
}