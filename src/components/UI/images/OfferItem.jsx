export default function OfferItem(props) {
  const tagElems = props.tags?.map(tag => <li>{tag}</li>);

  return (
    <a href="" className="offer-item">
      <div className="offer-item__wrapper">
        <img src={props.img} alt="" />
        {
          tagElems
            ? <ul className="tags">
              {tagElems}
            </ul>
            : null
        }
      </div>
      {
        props.title
          ? <div className="offer-item__title">
            <h3 className="h3">
              {props.title}
            </h3>
            <p className="offer-item__description main-text">
              {props.description}
            </p>
          </div>
          : null
      }
    </a>
  );
}

