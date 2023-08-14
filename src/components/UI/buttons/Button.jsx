export default function Button(props) {
  return (
    <button onClick={props.onClick} className='button'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M18 15.5L12 9.5L6 15.5" stroke="white" stroke-width="2"/>
      </svg>
      {props.children}
    </button>
  );
}