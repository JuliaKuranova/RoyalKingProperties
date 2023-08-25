export default function MyInputDropdown(props) {
    return (
      <div className="my-input-dropdown">
        {/* <label htmlFor={props.id}>{props.label}</label> */}
        <input
        //   id={props.id}
          type={props.type}
          placeholder={props.placeholder}
        //   value={props.value}
        //   onChange={props.onChange}
        />
      </div>
    );
  }