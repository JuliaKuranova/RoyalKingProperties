// props.color == 'black'
// props.color == 'yellow'

import Arrow from "../svgs/Arrow";

// props.icon = 'glass'
// props.icon = 'x'

export default function CallMe(props) {
  return (
    <button onClick={props.onClick} className="more-btn">
      <span>{props.children}</span>
      <Arrow />
    </button>
  );
}
