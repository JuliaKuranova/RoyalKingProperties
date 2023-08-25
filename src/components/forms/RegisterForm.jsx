import { useState } from "react";
import MyInput from "../UI/inputs/MyInput";
import MoreButton from "../UI/buttons/MoreButton";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function RegisterForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');

  const [value, setValue] = useState()
  return (
    <section className="form">
      <h2 className="h1">
        {props.title}
      </h2>
      <p className='main-text'>Fill out the form and we will call you back shortly</p>
      <form action="" className="register-form">
        <MyInput
          id='name-input'
          label='Your name'
          placeholder='Name'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <MyInput
          id='email-input'
          label='Your e-mail'
          placeholder='example@domain.com'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <div>
          <span className="label-phone">Your phone</span>
          <PhoneInput
            defaultCountry="US"
            // label='Your phone'
            placeholder="+971 54 547 7732"
            value={value}
            onChange={setValue} />
        </div>

        {/* <MyInput
          id='phone-input'
          label='Your phone'
          placeholder='+971 54 547 7732 '
          type='phone'
          value={phone}
          onChange={event => setPhone(event.target.value)}
        /> */}

        <p className='main-text'>Please visit <a href="xxx">the privacy policy</a> to understand how Royal King Properties handles your personal data</p>
        <MoreButton>call me</MoreButton>
      </form>
    </section>
  );
}