import { useState } from 'react';

function AdicionarPiloto() {
  const [novoNome, setNovoNome] = useState('');
  const [novoId, setNovoId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

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
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </>
  );
}

export default AdicionarPiloto;
