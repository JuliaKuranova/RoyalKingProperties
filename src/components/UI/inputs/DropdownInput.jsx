import { useState } from "react";
import MyInputDropdown from "./MyInputDropdown";

export default function DropdownInput(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dropdown-input'>
      <div className={`dropdown-input__wrapper ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />
      <div className="dropdown-head" onClick={() => setIsOpen(prev => !prev)}>
        <span>{props.text}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M3 6.70703L9 12.707L15 6.70703" stroke="#C2C2C2" stroke-width="2" />
          </svg>
        </span>
      </div>
      {
        isOpen
          ? <div className="dropdown-input__content">
            <MyInputDropdown
              // id='name-input'
              // label='Your name'
              placeholder={props.placeholder1}
              type='number'
            // value={name}
            // onChange={event => setName(event.target.value)}
            />
            <MyInputDropdown
              // id='name-input'
              // label='Your name'
              placeholder={props.placeholder2}
              type='number'
            // value={name}
            // onChange={event => setName(event.target.value)}
            />
          </div>
          : null
      }
    </div>
  );
}

