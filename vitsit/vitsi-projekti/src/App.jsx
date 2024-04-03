import Vitsit from './components/Vitsit'
import vitsitData from './components/vitsitData';
import './App.css'

function App() {
  const vitsitElementti = vitsitData.map(vitsi => {
    return <Vitsit kysymys={vitsi.kysymys} vastaus={vitsi.vastaus} />
  })
  return (
    <div>
      {vitsitElementti}
    </div>
  );
}

export default App
