// props.color == 'black'
// props.color == 'yellow'

// props.icon = 'glass'
// props.icon = 'x'

export default function MoreButton(props) {
  let colorClass = `btn-${props.color}`
  let icon = null;
  if (props.icon === 'glass') {
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.5C17.5 14.8137 14.8137 17.5 11.5 17.5C8.18629 17.5 5.5 14.8137 5.5 11.5C5.5 8.18629 8.18629 5.5 11.5 5.5C14.8137 5.5 17.5 8.18629 17.5 11.5ZM16.6814 17.5956C15.2855 18.7833 13.4764 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 13.2204 18.9569 14.814 18.0329 16.1187L22.2071 20.2929L20.7929 21.7071L16.6814 17.5956Z" fill="black" />
    </svg>;
  } else if (props.icon === 'x') {
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <rect x="1.63599" y="0.72168" width="20" height="2" transform="rotate(45 1.63599 0.72168)" fill="white" />
      <rect x="0.22168" y="14.8643" width="20" height="2" transform="rotate(-45 0.22168 14.8643)" fill="white" />
    </svg>;
  }

  return (
    <button onClick={props.onClick} className={`more-btn ${colorClass}`} >
      {icon}
      <span>
        {props.children}
      </span>
      {/* <svg xmlns="http://www.w3.org/2000/svg" className='arrow-svg' width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M1.61414 24.7349L24.6654 1.68359M24.6654 1.68359H3.43397M24.6654 1.68359V22.915" stroke="white" stroke-width="2"/>
      </svg> */}
    </button>
  );
}