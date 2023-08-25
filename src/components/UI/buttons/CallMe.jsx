// props.color == 'black'
// props.color == 'yellow'

// props.icon = 'glass'
// props.icon = 'x'

export default function CallMe(props) {
    return (
      <button onClick={props.onClick} className='more-btn'>
        <span>
          {props.children}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className='arrow-svg' width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M1.61414 24.7349L24.6654 1.68359M24.6654 1.68359H3.43397M24.6654 1.68359V22.915" stroke="white" stroke-width="2"/>
        </svg>
      </button>
    );
  }