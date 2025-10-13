import React, { useState, useEffect } from 'react';

// O nome do componente deve ser em PascalCase
function MaquinaDeEscrever() {
    // 1. Definição do Estado (substitui as variáveis globais 'let textoParcial' e 'let indice')
    const textoCompleto = "Venha estudar na Fatec";
    const [textoExibido, setTextoExibido] = useState('');
    const [indice, setIndice] = useState(0);

    // 2. Definição do Efeito Colateral (substitui o 'setInterval' solto)
    useEffect(() => {
        let intervalId;
        
        // 3. Lógica de Parar/Continuar
        // Se ainda não terminou de digitar, inicia o intervalo
        if (indice < textoCompleto.length) {
            intervalId = setInterval(() => {
                // Usa setTextoExibido e setIndice para mudar o estado
                setTextoExibido(prevTexto => prevTexto + textoCompleto[indice]);
                setIndice(prevIndice => prevIndice + 1);
            }, 100); 
            
            // Função de Limpeza (Cleanup): Para o intervalo se o componente for removido
            return () => clearInterval(intervalId);
        }

        // Se o texto terminou, o `useEffect` não inicia um novo `setInterval`, parando a digitação.

    }, [indice]); // O efeito roda novamente sempre que o 'indice' (o contador) muda.

    // 4. O que o componente retorna (substitui o 'root.render')
    return <h3>{textoExibido}</h3>;
}

// 5. O componente precisa ser exportado
export default MaquinaDeEscrever;