import Filter from "../../filter/Filter";

export default function HeaderImage(props) {
  console.log(props.img);
  console.log('test props header', props.setIsOpenA);
  return (
    <div className="header-image" onClick={props.closeInputs}>
      <img src={props.img} alt="" />

      {/* <div
        style={{
          background: `url("${props.img}")`,

        }}
        className="img"
      /> */}

      <div className="test">
        {props.title ? <h1 className="h1">{props.title}</h1> : null}
        {props.hasFilter ? <Filter isOpenA={props.isOpenA} setIsOpenA={props.setIsOpenA}/> : null}
      </div>
    </div>
  );
}

// export default function HeaderImage(props) {
//   return (
//     <div className="header-image">
//       <img src={props.img} alt="" />
//     </div>
//   );
// }
