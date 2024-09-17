import { useState } from 'react';
export default function App() {

    function handleClick(event) {
    
    console.log(`Você pressionou um ${event.target}!`);
    
    };
    
    return (
    
    <div>
    
    <div onClick={handleClick}><p>Clique-me</p></div>
    
    <button onClick={handleClick}>Clicar</button>
    
    </div>
    
    );
    
    }