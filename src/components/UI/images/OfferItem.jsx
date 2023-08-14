export default function OfferItem(props) {
  const tagElems = props.tags?.map(tag => <li>{tag}</li>);

  return (
    <div class="offer-item">
      <div class="offer-item__wrapper">
        <img src={props.img} alt="" />
        {
          tagElems
            ? <ul class="tags">
              {tagElems}
            </ul>
            : null
        }
      </div>
      {
        props.title
          ? <div class="offer-item__title">
            <h3 class="h3">
              {props.title}
            </h3>
            <p class="offer-item__description main-text">
              {props.description}
            </p>
          </div>
          : null
      }
    </div>
  );
}

