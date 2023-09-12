import Apartments_1 from "../../assets/img/apartments/Apartments_1.png";
import Apartments_2 from "../../assets/img/offer-photo-2.png";
import Apartments_3 from "../../assets/img/offer-photo-3.png";
import Apartments_4 from "../../assets/img/Photo3.png";
import Apartments_5 from "../../assets/img/Photo-75.png";
import Apartments_6 from "../../assets/img/Photo-83.png";
import Apartments_7 from "../../assets/img/Photo-88.png";



import OfferItem from "../UI/images/OfferItem";

import { Link } from 'react-router-dom';

export default function ApartmentsItems() {
  return (
    <section className="apartments section">
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_1}
          tags={[]}
          title={"KEMPINSKI RESIDENCES THE CREEK"}
          description="If you desire luxurious amenities and exceptional hotel hospitality, combined with the seclusion and ..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_6}
          tags={[]}
          title={"SAADIYAT LAGOONS"}
          description="Discover Saadiyat Lagoons on stunning Saadiyat Island. Experience sustainable mangrove ..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_5}
          tags={[]}
          title={"BURJ BINGHATTI JACOB & CO RESIDENCES"}
          description="The tallest residential tower in the world, Burj Binghatti Jacob & Co Residences invites you to live amidst the ... "
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_7}
          tags={[]}
          title={"DAMAC – HARBOUR LIGHTS"}
          description="Harbour Lights, located in Dubai Maritime City, is an exceptional residential development. This 52-storey ..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_5}
          tags={[]}
          title={"Kempinsky Villas Creek "}
          description="If you desire luxurious amenities and exceptional hotel hospitality, combined with the seclusion and ..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_6}
          tags={[]}
          title={"Kempinsky Villas Creek "}
          description="If you desire luxurious amenities and exceptional hotel hospitality, combined with the seclusion and ..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_3}
          tags={[]}
          title={"Kempinsky Villas Creek "}
          description="If you desire luxurious amenities and exceptional hotel hospitality, combined with the seclusion and ..."
        />
      </Link>
      <Link to="/apartment-page">
        <OfferItem
          img={Apartments_2}
          tags={[]}
          title={"Kempinsky Villas Creek "}
          description="If you desire luxurious amenities and exceptional hotel hospitality, combined with the seclusion and ..."
        />
      </Link>
    </section>
  );
}
