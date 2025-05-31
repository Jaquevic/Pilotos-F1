import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetalhesPiloto() {
  const { id } = useParams();
  const [piloto, setPiloto] = useState(null);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/pilotos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Piloto não encontrado');
        return res.json();
      })
      .then(data => setPiloto(data))
      .catch(err => setErro(err.message));
  }, [id]);

  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;
  if (!piloto) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Detalhes do Piloto</h1>
      <p><strong>ID:</strong> {piloto.id}</p>
      <p><strong>Nome:</strong> {piloto.nome}</p>
      <p><strong>Equipe:</strong> {piloto.equipe}</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
}

export default DetalhesPiloto;
