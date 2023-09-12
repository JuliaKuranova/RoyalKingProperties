import MoreButton from "../../components/UI/buttons/MoreButton";
import FilterItemMob from "./FilterItemMob";
// import DropdownInput from "../UI/inputs/DropdownInput";
import MyInputDropdown from "../UI/inputs/MyInputDropdown";
import { useState } from "react";
// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
// import { useRef } from "react;
import { useEffect } from "react";

export default function MobileFilter(props) {
  console.log(props.filterOptions);
  const ApartmentButtons = props.apartmentTypes.map((apartmentType) => (
    <FilterItemMob
      isActive={props.filterOptions.type.includes(apartmentType.value)}
      onClick={(event) => {
        const oldValues = [...props.filterOptions.type];
        if (!oldValues.includes(apartmentType.value)) {
          props.setFilterOptions({
            ...props.filterOptions,
            type: [...oldValues, apartmentType.value],
          });
        } else {
          const index = oldValues.indexOf(apartmentType.value);
          oldValues.splice(index, 1);
          props.setFilterOptions({
            ...props.filterOptions,
            type: [...oldValues],
          });
        }
      }}
    >
      {apartmentType.label}
    </FilterItemMob>
  ));

  const RoomButtons = props.bedrooms.map((bedroom) => (
    <FilterItemMob
      isActive={props.filterOptions.rooms.includes(bedroom.value)}
      onClick={(event) => {
        const oldValues = [...props.filterOptions.rooms];
        if (!oldValues.includes(bedroom.value)) {
          props.setFilterOptions({
            ...props.filterOptions,
            rooms: [...oldValues, bedroom.value],
          });
        } else {
          const index = oldValues.indexOf(bedroom.value);
          oldValues.splice(index, 1);
          props.setFilterOptions({
            ...props.filterOptions,
            rooms: [...oldValues],
          });
        }
      }}
    >
      {bedroom.value}
    </FilterItemMob>
  ));

  const StageButtons = props.stage.map((s) => (
    <FilterItemMob
      isActive={props.filterOptions.stage.includes(s.value)}
      onClick={(event) => {
        const oldValues = [...props.filterOptions.stage];
        if (!oldValues.includes(s.value)) {
          props.setFilterOptions({
            ...props.filterOptions,
            stage: [...oldValues, s.value],
          });
        } else {
          const index = oldValues.indexOf(s.value);
          oldValues.splice(index, 1);
          props.setFilterOptions({
            ...props.filterOptions,
            stage: [...oldValues],
          });
        }
      }}
    >
      {s.label}
    </FilterItemMob>
  ));
  [].splice();

  const [modalIsOpen, setIsOpen] = useState(false);

  // const customStyles = {
  //   .header__up {
  //     background: 'rebeccapurple',
  //   },
  // };


  useEffect(() => {
    let arrowModal = document.getElementsByClassName("arrow-modal");

    arrowModal[0].addEventListener('click', () => {
      // setIsOpen(prev => !prev)
      closeModal();
    });
  }, []);

  function openModal() {
    let logo = document.getElementsByClassName("logo");
    let arrowModal = document.getElementsByClassName("arrow-modal");
    // let headerUp = document.getElementsByClassName("header__up");
    setIsOpen(true);
    logo[0].style.display = "none";
    arrowModal[0].style.display = "flex";
    // headerUp[0].style.background = '#181818';
  }

  function closeModal() {
    let logo = document.getElementsByClassName("logo");
    console.log(logo)
    let arrowModal = document.getElementsByClassName("arrow-modal");
    // let headerUp = document.getElementsByClassName("header__up");
    console.log(arrowModal)
    setIsOpen(false);
    logo[0].style.display = "flex";
    arrowModal[0].style.display = "none";
    // headerUp[0].style.background = 'none';
  }

  return (
    <div className="mobile-filter__wrapper">
      <div className="mobile-filter__intro">
        <div className="h2">Find your perfect home or investment</div>

        {/* onClick={() => setShowMobileFilter(prev => !prev)} */}
        <MoreButton color="" icon="glass" onClick={openModal}>
          GO TO SEARCH
        </MoreButton>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
      >
        <div className="mobile-filter">
          <div className="mobile-filter__apartments">
            <p className="hints">I'm interested in</p>
            <div className="mobile-filter__items">{ApartmentButtons}</div>
          </div>

          <div className="mobile-filter__bedrooms">
            <p className="hints">Bedrooms</p>
            <div className="mobile-filter__items">{RoomButtons}</div>
          </div>

          <div className="mobile-filter__stage">
            <p className="hints">Stage</p>
            <div className="mobile-filter__items">{StageButtons}</div>
          </div>

          <div className="mobile-filter__price">
            <div>
              <p className="hints">Price from</p>
              <div class="my-input-dropdown">
                <input type="number" placeholder="0 AED" />
              </div>
            </div>
            <div className="mobile-filter_area">
              <p className="hints">To</p>
              <div class="my-input-dropdown">
                <input type="number" placeholder="999 999 999 AED" />
              </div>
            </div>
          </div>

          <div className="mobile-filter__area">
            <div>
              <p className="hints">Area from</p>
              <div class="my-input-dropdown">
                <input type="number" placeholder="0 M²" />
              </div>
            </div>
            <div>
              <p className="hints">To</p>
              <div class="my-input-dropdown">
                <input type="number" placeholder="10000 M²" />
              </div>
            </div>
          </div>

          <div className="mobile-filter__btn">
            <MoreButton color="" icon="x" onClick={closeModal} />
            <MoreButton color="yellow" icon="glass">
              search
            </MoreButton>
          </div>
        </div>
      </Modal>

      {/* className={`mobile-filter ${showMobileFilter ? 'show' : ''}`} */}

      {/* <div className="mobile-filter">
        <div className="mobile-filter__apartments">
          <p className="hints">I'm interested in</p>
          <div className="mobile-filter__items">{ApartmentButtons}</div>
        </div>

        <div className="mobile-filter__bedrooms">
          <p className="hints">Bedrooms</p>
          <div className="mobile-filter__items">{RoomButtons}</div>
        </div>

        <div className="mobile-filter__stage">
          <p className="hints">Stage</p>
          <div className="mobile-filter__items">{StageButtons}</div>
        </div>

        <div className="mobile-filter__price">
          <div>
            <p className="hints">Price from</p>
            <div class="my-input-dropdown">
              <input type="number" placeholder="0 AED" />
            </div>
          </div>
          <div>
            <p className="hints">To</p>
            <div class="my-input-dropdown">
              <input type="number" placeholder="999 999 999 AED" />
            </div>
          </div>
        </div>

        <div className="mobile-filter__area">
          <div>
            <p className="hints">Area from</p>
            <div class="my-input-dropdown">
              <input type="number" placeholder="0 M²" />
            </div>
          </div>
          <div>
            <p className="hints">To</p>
            <div class="my-input-dropdown">
              <input type="number" placeholder="10000 m²" />
            </div>
          </div>
        </div>

        <div className="mobile-filter__btn">
          <MoreButton color="" icon="x" />
          <MoreButton color="yellow" icon="glass">
            search
          </MoreButton>
        </div>
      </div> */}
    </div>
  );
}
