import UnitImage from "../UI/images/UnitImage";
import unitImage1 from '../../assets/img/units-Item-1.png';
import unitImage2 from '../../assets/img/units-Item-2.png';
import unitImage3 from '../../assets/img/units-Item-3.png';
// import ServicesPic from "../assets/img/Services-pic.png";

import { Link } from 'react-router-dom';


export default function Units() {
  return (
    <section className="units">
      <Link to='/apartments'>
        <UnitImage img={unitImage1} >apartments</UnitImage>
      </Link>
      <Link to='/project'>
        <UnitImage img={unitImage2} >Villas</UnitImage>
      </Link>
      <Link to='/project'>
        <UnitImage img={unitImage3} >Penthouses</UnitImage>
      </Link>
    </section>
  );
}
