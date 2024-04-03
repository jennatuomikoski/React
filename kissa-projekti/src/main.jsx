import React from 'react'
import ReactDOM from 'react-dom/client'
import Kissa from '/components/Kissa'
import '/src/App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="contacts">
    <Kissa 
      img='/images/whiskerson.png'
      name='Mr. Whiskerson'
      phone='(212) 555-1234'
      email='mr.whiskaz@catnap.meow'
    />
    <Kissa 
      img='/images/fluffy.png'
      name='Fluffykins'
      phone='(212) 555-2345'
      email='fluff@me.com'
    />
    <Kissa 
      img='/images/felix.png'
      name='Felix'
      phone='(212) 555-3456'
      email='thecat@hotmail.com'
    />
    <Kissa 
      img='/images/pumpkin.png'
      name='Pumpkin'
      phone='(0800) CAT KING'
      email='pumpkin@scrimba.com'
    />
    </div>
  </React.StrictMode>,
)
