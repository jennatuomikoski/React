import './App.css'
import data1 from './assets/tiedot.jsx'
import Yhteystiedot from './components/ytiedot.jsx'

function App() {
  const tiedot = data1.map((tietoja) => {
    return (
      <Yhteystiedot
        name={tietoja.name}
        email={tietoja.email}
        address={tietoja.address}
        phone={tietoja.phone}
        website={tietoja.website}
      />
    );
  })
  return (
    <div className='kortit'>
      {tiedot}
    </div>
  );
}

export default App
