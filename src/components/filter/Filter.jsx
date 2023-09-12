import { useRef, useState } from "react";

import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

const items = [
  {
    rooms: 3,
    type: "Apartments",
    price: 1000000,
    stage: "ready",
  },
  {
    rooms: 1,
    type: "Apartments",
    price: 2000000,
    stage: "ready",
  },
  {
    rooms: "Studio",
    type: "Villa",
    price: 1005000,
    stage: "ready",
  },
  {
    rooms: 3,
    type: "Penthouse",
    price: 6000000,
    stage: "ready",
  },
  {
    rooms: 3,
    type: "Villa",
    price: 2000000,
    stage: "ready",
  },
];

export default function Filter(props) {
  console.log("test props from filter", props);

  function filterItems() {
    const keys = ["type", "rooms"];
    const keysRanges = ["price", "square"];
    let result = [...items];

    keys.forEach((key) => {
      if (filterOptions[key].length) {
        result = result.filter((item) =>
          filterOptions[key].includes(item[key])
        );
      }
    });

    console.log(result);

    return result;
  }

  const [filterOptions, setFilterOptions] = useState({
    type: ['Apartments'],
    rooms: [2, 4],
    stage: [],
    price: [0, 0],
    area: [0, 0]
  });

  const apartmentTypes = [
    { label: "Apartments", value: "Apartments" },
    { label: "Villa", value: "Villa" },
    { label: "Penthouse", value: "Penthouse" },
  ];
  const bedrooms = [
    { label: "Studio", value: "Studio" },
    { label: "1 Bedroom", value: 1 },
    { label: "2 Bedroom", value: 2 },
    { label: "3 Bedroom", value: 3 },
    { label: "4 Bedroom", value: 4 },
    { label: "5 Bedroom", value: 5 },
  ];
  const stage = [
    { label: "Ready", value: "Ready" },
    { label: "Off-plan", value: "Off-plan" },
  ];

  return (
    <>
      <DesktopFilter 
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        apartmentTypes={apartmentTypes}
        bedrooms={bedrooms}
        stage={stage}
      />

      <MobileFilter
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        apartmentTypes={apartmentTypes}
        bedrooms={bedrooms}
        stage={stage}
      />
    </>
  );
}
