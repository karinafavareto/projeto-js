import React, { useState, useEffect } from 'react';

// Função do componente Letreiro
function Letreiro() {
    // Mesma lógica que você usou, mas isolada.
    const textoCompleto = "Conheça a Fatec";
    const [textoExibido, setTextoExibido] = useState('');
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        // ... (todo o useEffect com o setInterval e setTimeout)
        let intervalId;
        
        if (indice < textoCompleto.length) {
            intervalId = setInterval(() => {
                setTextoExibido(prevTexto => prevTexto + textoCompleto[indice]);
                setIndice(prevIndice => prevIndice + 1);
            }, 100);
            
        } else {
            setTimeout(() => {
                setTextoExibido('');
                setIndice(0);
            }, 2000);
        }

        return () => clearInterval(intervalId);
    }, [indice]);

    return (
            <h3>{textoExibido}</h3>
    );
}

// 💥 Você precisa exportar para que o App.js possa IMPORTAR e USAR.
export default Letreiro;