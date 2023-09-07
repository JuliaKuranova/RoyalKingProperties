import Filter from "../../filter/Filter";

export default function HeaderImage(props) {
  console.log(props.img);
  return (
    <div className="header-image">
      <img src={props.img} alt="" />
      {/* <div style={{ background: `url("${props.img}") no-repeat center center fixed`, backgroundSize: 'cover' }} className="img"> */}
      {props.title ? <h1 className="h1">{props.title}</h1> : null}
      {props.hasFilter ? <Filter /> : null}
    </div>
  );
}
