export default function Cookie(props) {
  return (
    <div className="main-text">
      {/* {props.text ? <span className="main-text">{props.text}</span> : null}. */}
      <span>{props.children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path d="M4 10.5L8 6.5L4 2.5" stroke="white" />
      </svg>
    </div>
  );
}
