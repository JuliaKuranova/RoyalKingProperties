import UnitImage from "../UI/images/UnitImage";

import unitImage1 from '../../assets/img/units-Item-1.png';
import unitImage2 from '../../assets/img/units-Item-1.png';
import unitImage3 from '../../assets/img/units-Item-1.png';


export default function Units() {
  return (
    <section className="units">
      <UnitImage img={unitImage1} />
      <UnitImage img={unitImage2} />
      <UnitImage img={unitImage3} />
    </section>
  );
}