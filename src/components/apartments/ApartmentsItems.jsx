import Apartments_1 from "../../assets/img/apartments/Apartments_1.png";
import OfferItem from "../UI/images/OfferItem";

import { Link } from 'react-router-dom';

export default function ApartmentsItems() {
  return (
    <section className="apartments section">
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_1}
          tags={[]}
          title={"1 000 000 AED"}
          description="Harbour Lights, located in Dubai Maritime City, is an exceptional residential development. This 52-storey tower by Damac Properties offers 1- to 3-bedroom a..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_1}
          tags={[]}
          title={"1 000 000 AED"}
          description="Harbour Lights, located in Dubai Maritime City, is an exceptional residential development. This 52-storey tower by Damac Properties offers 1- to 3-bedroom a..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_1}
          tags={[]}
          title={"1 000 000 AED"}
          description="Harbour Lights, located in Dubai Maritime City, is an exceptional residential development. This 52-storey tower by Damac Properties offers 1- to 3-bedroom a..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_1}
          tags={[]}
          title={"1 000 000 AED"}
          description="Harbour Lights, located in Dubai Maritime City, is an exceptional residential development. This 52-storey tower by Damac Properties offers 1- to 3-bedroom a..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_1}
          tags={[]}
          title={"1 000 000 AED"}
          description="Harbour Lights, located in Dubai Maritime City, is an exceptional residential development. This 52-storey tower by Damac Properties offers 1- to 3-bedroom a..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_1}
          tags={[]}
          title={"1 000 000 AED"}
          description="Harbour Lights, located in Dubai Maritime City, is an exceptional residential development. This 52-storey tower by Damac Properties offers 1- to 3-bedroom a..."
        />
      </Link>
    </section>
  );
}
