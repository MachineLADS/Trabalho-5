// Exemplo de useState
import { useState } from 'react';

export default function Title() {

const [nome, setNome] = useState('');

function handleClick(event) {

    setNome('Tchau');
    
    console.log("Clicou!");
    
    };
        

return (

<div>

<h1> Clique para Cumprimento: {nome}!</h1>


<button onClick={() => setNome('Seja bem-vindo')}>Cumprimento</button>

<button onClick={handleClick}>Despedida</button>


</div>

);

}


function handleClick(texto, event) {

setNome(texto);

console.log("Clicou!");

};

<button onClick={(event) => handleClick('José', event)}>
Clicar
</button>






