import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Charles from './assets/Charles.png'
import Hamilton from './assets/Hamilton.png'
import Kimi from './assets/Kimi.png'
import Russell from './assets/Russell.png'
import './App.css'

function App() {
  const [inputId, setInputId] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [novoId, setNovoId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  async function buscarPiloto() {
    try {
      const response = await fetch(`http://localhost:3000/pilotos/${inputId}`);
      if (!response.ok) throw new Error("Piloto não encontrado");
      const data = await response.json();
      setErro('');
      navigate(`/piloto/${data.id}`, { state: data });
    } catch (err) {
      setErro(err.message);
    }
  }

  async function adicionarPiloto() {
    try {
      const response = await fetch('http://localhost:3000/pilotos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: parseInt(novoId),
          nome: novoNome,
          equipe: 'Indefinida'
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.mensagem || "Erro ao adicionar piloto");

      setMensagem(data.mensagem);
      setErro('');
      setNovoId('');
      setNovoNome('');
    } catch (err) {
      setErro(err.message);
      setMensagem('');
    }
  }

  return (
    <>
      <div className='orgF'>
        <div className='hamiltonf'>
          <a href="https://www.formula1.com/en/drivers/lewis-hamilton" target="_blank">
            <img src={Hamilton} className="lw" />
          </a>
        </div>
        <div className='charlesf'>
          <a href="https://www.formula1.com/en/drivers/charles-leclerc" target="_blank">
            <img src={Charles} className="cl" />
          </a>
        </div>
      </div>

      <div className='orgM'>
        <div className='kimi'>
          <a href="https://www.formula1.com/en/drivers/kimi-antonelli" target="_blank">
            <img src={Kimi} className="km" />
          </a>
        </div>
        <div className='russell'>
          <a href="https://www.formula1.com/en/drivers/george-russell" target="_blank">
            <img src={Russell} className="gr" />
          </a>
        </div>
      </div>

      <h2>Buscar piloto</h2>
      <input
        className='input'
        placeholder='Id Piloto'
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <div className="card">
        <button onClick={buscarPiloto}>Pesquisar Piloto</button>
      </div>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <h2>Adicionar novo piloto</h2>
      <input
        className='input'
        placeholder='Novo ID'
        value={novoId}
        onChange={(e) => setNovoId(e.target.value)}
      />
      <input
        className='input'
        placeholder='Nome do piloto'
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />
      <div className="card">
        <button onClick={adicionarPiloto}>Adicionar Piloto</button>
      </div>
      {mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}
    </>
  )
}

export default App
