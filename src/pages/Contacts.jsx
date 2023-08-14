import RegisterForm from '../components/forms/RegisterForm';
import SocialLinks from '../components/UI/images/SocialLinks';
import Map from '../components/UI/images/Map';

export default function Contacts() {
  return (
      <main className="contacts">
        <section className='contacts__info section'>
          <div className='h1'>+971 54 547 7732</div>
          <SocialLinks />
        </section>
        <section className='contacts__form section'>
            <Map />
            <RegisterForm title='request a call'></RegisterForm>
        </section>
      </main>
  );
}
