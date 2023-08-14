import Arrow from "../svgs/Arrow";

export default function UnitImage(props) {
  return (
    <div className="unit-image">
      <img src={props.img} alt="" />
      <div className="unit-image__label">
        <span>APARTMENTS</span>
      </div>
      <div className="unit-image__arrow">
        <Arrow />
      </div>
    </div>
  );
}