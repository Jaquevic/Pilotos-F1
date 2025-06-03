import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BuscarPiloto() {
  const [inputId, setInputId] = useState('');
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

  return (
    <>
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
    </>
  );
}

export default BuscarPiloto;
