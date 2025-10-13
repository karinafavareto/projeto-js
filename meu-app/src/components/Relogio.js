import React, { useState, useEffect } from 'react';

function Relogio() {
    // 1. Inicializa o estado 'time' com a hora atual.
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Função para atualizar o estado com a nova hora.
        function tick() {
            setTime(new Date().toLocaleTimeString());
        }

        // 2. Inicia o intervalo de atualização a cada 1 segundo (1000ms).
        const intervalId = setInterval(tick, 1000);

        // 3. Limpeza: Essencial. Retorna a função que para o intervalo
        // quando o componente é desmontado.
        return () => clearInterval(intervalId);
        
    }, []); // O array vazio garante que o setInterval rode APENAS uma vez.

    // O componente renderiza o estado 'time'.
    return (
        <div>
            <h3>{time}</h3>
        </div>
    );
}

export default Relogio;