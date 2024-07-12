import React, { useState, useEffect } from 'react';
import '../App.css';

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [mostrarMensagem, setMostrarMensagem] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    const temporizadorMensagem = setTimeout(() => {
      setMostrarMensagem(false);
    }, 5000); 

    return () => {
      clearInterval(intervalo);
      clearTimeout(temporizadorMensagem);
    };
  }, []);

  return (
    <div className="app">
      <div className="relogio-container">
        <div className="relogio">{horaAtual.toLocaleTimeString()}</div>
      </div>
      {mostrarMensagem && <div className="mensagem">Irei desaparecer...</div>}
    </div>
  );
}

export default Relogio;
