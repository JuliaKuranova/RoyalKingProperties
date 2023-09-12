import { useState } from "react";

export default function MyInputDropdown(props) {
  const [first, setFirst] = useState(0)
  return (
    <div className="my-input-dropdown">
      {/* <label htmlFor={props.id}>{props.label}</label> */}
      <input
        //   id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(event) => {
          const value = event.target.value;

          setFirst(Number(value.replace(/\s/g, '')))
        }}
        value={first > 0 ? first.toLocaleString('ru') : ''}
        //   value={props.value}
        //   onChange={props.onChange}
      />
      <span>{props.metric}</span>
    </div>
  );
}
