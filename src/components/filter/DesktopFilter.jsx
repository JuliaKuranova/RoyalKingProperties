//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import { MultiSelect } from "primereact/multiselect";
import DropdownInput from "../UI/inputs/DropdownInput";
import MyButton from "../UI/buttons/MyButton";


import MoreButton from "../UI/buttons/MoreButton";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function DesktopFilter(props) {
  const ref1 = useRef();

  useEffect(() => {
    const elems = ref1.current.querySelectorAll(".p-multiselect-label");

    if (props.filterOptions.type.length === 3) {
      elems[0].innerText = "Any types";
    }

    if (props.filterOptions.rooms.length) {
      let rooms = props.filterOptions.rooms
        .filter((e) => e !== "Studio")
        .sort((a, b) => a - b);
      const isStudio = props.filterOptions.rooms.includes("Studio");
      let text = rooms.join(", ");
      if (text) {
        text += " Bedrooms";
      }
      if (isStudio && text) {
        text = "Studio, " + text;
      } else if (isStudio) {
        text = "Studio";
      }
      elems[1].innerText = text;
    }

    if (props.filterOptions.stage.length === 2) {
      elems[2].innerText = "Any stage";
    }
  }, [props.filterOptions]);

  const arrowFilterRef = useRef();

  // function rotate() {
  //   let multiselectTrigger = document.querySelector(".p-multiselect-trigger-icon");
  //   multiselectTrigger.style.transform = 'rotate(-180deg)';
  // }

  useEffect(() => {
    let iconTrigger = document.querySelector(".p-multiselect-panel");
    if (iconTrigger == null) {
      // rotate() 
      let multiselectTrigger = document.querySelector(".p-multiselect-trigger-icon");
      multiselectTrigger.style.transform = 'rotate(-180deg)';
      console.log(multiselectTrigger)
    } 
    console.log(iconTrigger)
    console.log((iconTrigger == null))
    
  }, []);

  const [actives, setActives] = useState([false, false, false, false, false]);

  const [show, toggleShow] = useState(false);

  return (
    <div className="filter" ref={ref1}>
      <div className="h2">Find your perfect home or investment</div>

      {/* <React.Fragment
        onClick={() => {
          const newAcitves = [...actives];
          newAcitves[0] = !newAcitves[0];
          setActives(newAcitves);
          console.log(newAcitves);
        }}
      > */}
        <MultiSelect
          value={props.filterOptions.type}
          onChange={(event) => {
            props.setFilterOptions({
              ...props.filterOptions,
              type: event.value,
            });
            console.log(event.value);
          }}
          options={props.apartmentTypes}
          placeholder="Any types"
          className={`w-full md:w-20rem ${actives[0] ? "active" : ""}`}
          ref={arrowFilterRef}
          checkboxIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <g clip-path="url(#clip0_1024_6197)">
                <path
                  d="M11.951 3.41172L4.5107 10.8521C4.44516 10.9176 4.33905 10.9176 4.27367 10.8521L0.0490372 6.62728C-0.0163457 6.56205 -0.0163457 6.45593 0.0490372 6.3904L1.07557 5.36387C1.1411 5.29849 1.24722 5.29849 1.3126 5.36387L4.39234 8.44345L10.6876 2.14816C10.7533 2.08278 10.8591 2.08278 10.9247 2.14816L11.951 3.17469C12.0166 3.24007 12.0166 3.34603 11.951 3.41172Z"
                  fill="#181818"
                />
              </g>
              <defs>
                <clipPath id="clip0_1024_6197">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            
          }
        />
      {/* </React.Fragment> */}

      <MultiSelect
        value={props.filterOptions.rooms}
        onChange={(event) => {
          props.setFilterOptions({
            ...props.filterOptions,
            rooms: event.value,
          });
          console.log(event.value);
        }}
        options={props.bedrooms}
        placeholder="All"
        className="w-full md:w-20rem"
        checkboxIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <g clip-path="url(#clip0_1024_6197)">
              <path
                d="M11.951 3.41172L4.5107 10.8521C4.44516 10.9176 4.33905 10.9176 4.27367 10.8521L0.0490372 6.62728C-0.0163457 6.56205 -0.0163457 6.45593 0.0490372 6.3904L1.07557 5.36387C1.1411 5.29849 1.24722 5.29849 1.3126 5.36387L4.39234 8.44345L10.6876 2.14816C10.7533 2.08278 10.8591 2.08278 10.9247 2.14816L11.951 3.17469C12.0166 3.24007 12.0166 3.34603 11.951 3.41172Z"
                fill="#181818"
              />
            </g>
            <defs>
              <clipPath id="clip0_1024_6197">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        }
      />

      <DropdownInput
        text="Any area"
        placeholder1="From"
        placeholder2="To"
        metric="m²"
        isOpenA={props.isOpenA}
        setIsOpenA={props.setIsOpenA}
        className='dropdown-input__first'
      />

      <DropdownInput
        text="Price range"
        placeholder1="From"
        placeholder2="To"
        metric="AED"
        isOpenA={props.isOpenA}
        setIsOpenA={props.setIsOpenA}
        className='dropdown-input__last'
      />

      <MultiSelect
        value={props.filterOptions.stage}
        onChange={(event) => {
          props.setFilterOptions({
            ...props.filterOptions,
            stage: event.value,
          });
        }}
        options={props.stage}
        placeholder="Any stage"
        className="w-full md:w-20rem"
        checkboxIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <g clip-path="url(#clip0_1024_6197)">
              <path
                d="M11.951 3.41172L4.5107 10.8521C4.44516 10.9176 4.33905 10.9176 4.27367 10.8521L0.0490372 6.62728C-0.0163457 6.56205 -0.0163457 6.45593 0.0490372 6.3904L1.07557 5.36387C1.1411 5.29849 1.24722 5.29849 1.3126 5.36387L4.39234 8.44345L10.6876 2.14816C10.7533 2.08278 10.8591 2.08278 10.9247 2.14816L11.951 3.17469C12.0166 3.24007 12.0166 3.34603 11.951 3.41172Z"
                fill="#181818"
              />
            </g>
            <defs>
              <clipPath id="clip0_1024_6197">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        }
      />

      {/* <MoreButton color="yellow" icon="glass">
        SEARCH
      </MoreButton> */}
      <MyButton />
    </div>
    //   <svg
    //   width="75"
    //   height="16"
    //   viewBox="0 0 75 16"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M2.25 4.038C2.25 8.358 10.962 5.118 10.962 11.004C10.962 12.894 9.612 15.306 5.688 15.306C2.196 15.306 0.414 12.804 0.414 10.68H1.89C1.89 12.21 3.348 13.83 5.832 13.83C8.514 13.83 9.504 12.354 9.504 10.824C9.504 6.72 0.774 9.942 0.774 3.984C0.774 1.842 2.52 0.149999 5.616 0.149999C8.514 0.149999 10.314 1.932 10.314 4.434H8.838C8.838 2.832 7.632 1.626 5.616 1.626C3.636 1.626 2.25 2.454 2.25 4.038ZM13.8382 1.86V6.486H20.8402V7.908L13.8382 7.872V13.596H22.1542V15H12.3802V0.438H22.1542V1.86H13.8382ZM32.6364 10.824H26.2104L24.7164 15H23.1684L28.6224 0.438H30.2604L35.7144 15H34.1304L32.6364 10.824ZM29.4324 1.806L26.7324 9.402H32.1324L29.4324 1.806ZM44.2503 8.646L47.7963 15.018H46.0683L42.5583 8.646H44.2503ZM47.4903 4.542C47.4903 7.602 45.3303 8.484 44.2503 8.646H39.3183H38.2023V15.018H36.7083V0.455999L42.7203 0.438C44.5563 0.438 47.4903 1.482 47.4903 4.542ZM43.0083 7.17C45.0063 7.17 46.0143 6.396 46.0143 4.542C46.0143 2.976 44.5743 1.95 43.0083 1.95H38.2023V7.17H43.0083ZM60.6385 9.69H62.1505C61.4125 13.794 58.3525 15.306 55.4725 15.306C51.2965 15.306 48.6145 12.318 48.6145 7.71C48.6145 5.37 49.3165 3.408 50.6305 2.058C51.8545 0.815999 53.5645 0.131999 55.4725 0.131999C58.8925 0.131999 61.3045 2.094 62.0605 5.388H60.5485C59.7745 2.634 57.5785 1.608 55.4545 1.608C52.8265 1.608 50.0905 3.354 50.0905 7.71C50.0905 12.228 52.8265 13.83 55.4545 13.83C58.2085 13.83 60.0625 12.354 60.6385 9.69ZM73.2534 15V7.89H64.9734V15H63.4974V0.438H64.9734V6.486H73.2534V0.438H74.7294V15H73.2534Z"
    //     fill="black"
    //   />
    // </svg>
  );
}
