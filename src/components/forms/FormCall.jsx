import RegisterForm from './RegisterForm';
import Map from './../UI/images/Map';

export default function FormCall() {
  
    return (
        <section className='form'>
            <Map />
            <RegisterForm title='request a call'></RegisterForm>
        </section>
    );
  }