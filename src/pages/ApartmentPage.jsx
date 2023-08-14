import apartmentPhoto1 from '../assets/img/apartments-photo.png';
import RegisterForm from '../components/forms/RegisterForm';
import Map from '../components/UI/images/Map';

export default function ApartmentPage() {
  return (
    <main className='apartment-page'>
      <div className="apartment__card section">
        <h1 className="h1">
          apartment in Kempinski Residences The Creek
        </h1>

        <div className="apartment__intro">
          <img src={apartmentPhoto1} className='apartment-photo' alt="" />

          <div className="apartment-specification">
            <div className="h1">
              2 950 000 AED
            </div>
            <div className="specifications"><span>1</span>bedroom</div>
            <div className="specifications"><span>2</span>Baths</div>
            <div className="specifications"><span>110.5</span> m2 <span>/ 1223</span> ft2</div>
          </div>
        </div>

        <div className="main-text">
          Step into a world of luxury with this impeccably designed 1-bedroom apartment, located on the prestigious 7th floor of Kempinski Residences The Creek in Dubai.
          <br /><br />
          Exclusive and Rare: Exclusivity of owning this 1-bedroom apartment situated on the 7th floor. This is a rare chance to secure a prime piece of real estate in the prestigious Kempinski Residences The Creek.
          <br /><br />
          Promising Investment Potential: Swiss Property has a proven track record of appreciation, and this property presents an incredible opportunity for future growth. Secure your financial prosperity with this astute investment decision!
          <br /><br />
          Elevated Views: Views from the 7th floor beautifully showcase Dubai Creek and the city’s iconic skyline. Every day, wake up to a visual masterpiece that will leave you inspired and in awe.
          <br /><br />
          Unmatched Amenities: From a serene infinity pool overlooking the Creek to a rejuvenating Spa and a state-of-the-art fitness center, Kempinski Residences The Creek presents an oasis of relaxation and entertainment. Enjoy a lifestyle that caters to your every need and desire.
        </div>

      </div>

      <section className='contacts__form section'>
        <div className="map__box">
          <Map />
        </div>
        <RegisterForm title='REGISTER YOUR INTEREST'></RegisterForm>
      </section>
    </main>
  );
}