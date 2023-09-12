// props.color == 'black'
// props.color == 'yellow'

// props.icon = 'glass'
// props.icon = 'x'


export default function MoreButton(props) {
  let colorClass = `btn-${props.color}`;
  let icon = null;
  if (props.icon === "glass") {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 11.5C17 14.8137 14.3137 17.5 11 17.5C7.68629 17.5 5 14.8137 5 11.5C5 8.18629 7.68629 5.5 11 5.5C14.3137 5.5 17 8.18629 17 11.5ZM16.1814 17.5956C14.7855 18.7833 12.9764 19.5 11 19.5C6.58172 19.5 3 15.9183 3 11.5C3 7.08172 6.58172 3.5 11 3.5C15.4183 3.5 19 7.08172 19 11.5C19 13.2204 18.4569 14.814 17.5329 16.1187L21.7071 20.2929L20.2929 21.7071L16.1814 17.5956Z"
          fill="#181818"
        />
      </svg>
    );
  } else if (props.icon === "x") {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <rect
          x="1.63599"
          y="0.72168"
          width="20"
          height="2"
          transform="rotate(45 1.63599 0.72168)"
          fill="white"
        />
        <rect
          x="0.22168"
          y="14.8643"
          width="20"
          height="2"
          transform="rotate(-45 0.22168 14.8643)"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <button onClick={props.onClick} className={`more-btn ${colorClass}`}>
      {icon}
      {props.children ? <div>{props.children}</div> : null}
    </button>
  );
}
