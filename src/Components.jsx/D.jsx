export default function App() {

    function handleKeyDown(event) {
    
    console.log(`Você acionou a tecla ${event.key}`);
    
    }
    
    return (
    
    <input onKeyDown={handleKeyDown} />
    
    );
    
    }