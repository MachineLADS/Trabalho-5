export default function App() {

    function handleFocus(event) {
    
    console.log(`${event.target} ganho o foco enquanto que
    
    ${event.relatedTarget} perdeu o foco`);
    
    }
    
    function handleBlur(event) {
    
    console.log(`${event.target} perdeu o foco enquanto que
    
    ${event.relatedTarget} ganhou o foco`);
    
    }
    
    return ( <div>
    
    <input id="id1" onFocus={handleFocus} onBlur={handleBlur}/>
    
    <input id="id2" onFocus={handleFocus} onBlur={handleBlur}/>
    
    </div> );
    
    }