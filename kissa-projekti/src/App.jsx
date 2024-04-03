import { useState } from 'react'
import kissa1 from './assets/whiskerson.png'
import kissa2 from './assets/fluffy.png'
import kissa3 from './assets/felix.png'
import kissa4 from './assets/pumpkin.png'
import phone from './assets/phone-icon.png'
import mail from './assets/mail-icon.png'
import './App.css'

function Kisut() {
  return (
    <div className='contacts'>
      <div className='contact-card'>
        <img src={kissa1} alt="Mr Whiskerson" />
        <h3>Mr. Whiskerson</h3>
        <div className='info-group'>
          <img src={phone} alt="Phone" />
            <p>(212) 555-1234</p>
        </div>
        <div className='info-group'>
          <img src={mail} alt="Mail" />
            <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className='contact-card'>
        <img src={kissa2} alt="Fluffykins" />
        <h3>Fluffykins</h3>
        <div className='info-group'>
          <img src={phone} alt="Phone" />
            <p>(212) 555-2345</p>
        </div>
        <div className='info-group'>
          <img src={mail} alt="Mail" />
            <p>fluff@me.com</p>
        </div>
      </div>

      <div className='contact-card'>
        <img src={kissa3} alt="Felix" />
        <h3>Felix</h3>
        <div className='info-group'>
          <img src={phone} alt="Phone" />
            <p>(212) 555-3456</p>
        </div>
        <div className='info-group'>
          <img src={mail} alt="Mail" />
            <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className='contact-card'>
        <img src={kissa4} alt="Pumpkin" />
        <h3>Pumpkin</h3>
        <div className='info-group'>
          <img src={phone} alt="Phone" />
            <p>(0800) CAT KING</p>
        </div>
        <div className='info-group'>
          <img src={mail} alt="Mail" />
            <p>pumpkin@scrimba.com</p>
        </div>
      </div>
    </div>
  )
}

export default Kisut
