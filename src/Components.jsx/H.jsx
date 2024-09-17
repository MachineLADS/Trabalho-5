export default function App() {

    function handleSubmit(event) {
    
    console.log(`Um nome foi enviado: ${event.target.value}`);
    
    event.preventDefault();
    
    }
    
    return (
    
    <form onSubmit={handleSubmit}>
    
    <label>Nome:
    
    <input type="text" />
    
    </label>
    
    <input type="submit" value="Enviar" />
    
    </form>
    
    );
    
    }
    