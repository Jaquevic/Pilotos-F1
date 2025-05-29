import { useState } from 'react'
import Charles from './assets/Charles.png'
import Hamilton from './assets/Hamilton.png'
import Kimi from './assets/Kimi.png'
import Russell from './assets/Russell.png'
import './App.css'

  function App() {

  const [inputId, setInputId] = useState('');
  const [pilotoNome, setPilotoNome] = useState('');
  const [erro, setErro] = useState('');

  async function buscarPiloto() {
    try {
      const response = await fetch(`http://localhost:3000/pilotos/${inputId}`);
      if (!response.ok) {
        throw new Error("Piloto não encontrado");
      }
      const data = await response.json();
      setPilotoNome(data.nome); 
      setErro('');
      
    } catch (err) {
      setPilotoNome('');
      setErro(err.message);
    }
  }

  return (
    <>

      <div className='orgF'>

        <div className='hamiltonf'>
          <a href="https://www.formula1.com/en/drivers/lewis-hamilton" target="_blank">
            <img src={Hamilton} className="lw" alt="Hamilton" />
          </a>
        </div>

        <div className='charlesf'>
          <a href="https://www.formula1.com/en/drivers/charles-leclerc" target="_blank">
            <img src={Charles} className="cl" alt="Charles" />
          </a>
        </div>

       </div> 

       <div className='orgM'>

        <div className='kimi'>
          <a href="https://www.formula1.com/en/drivers/kimi-antonelli" target="_blank">
            <img src={Kimi} className="km" alt="Kimi" />
          </a>
        </div> 

        <div className='russell'>
          <a href="https://www.formula1.com/en/drivers/george-russell" target="_blank">
            <img src={Russell} className="gr" alt="russell" />
          </a>
        </div>

        </div> 

      
       <input
        className='input'
        placeholder='Id Piloto'
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />


      <div className="card">
        <button onClick ={buscarPiloto}> Pesquisar Piloto </button>
      </div>

      {pilotoNome && <p>Nome do piloto: {pilotoNome}</p>}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </>
  )
}

export default App
