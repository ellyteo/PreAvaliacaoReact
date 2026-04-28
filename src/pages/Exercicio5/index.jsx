import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio5() {

const [milhas, setMilhas] = useState()
const [resultado, setResultado] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado(Number(milhas)*1.60934)
}

    return(
        <>
        
<br />
<Link to="/">
<button>Voltar para o início</button>
</Link>

<form onSubmit={handleSubmit}>

<br /><br />
<label>Digite a distância em milhas:</label>
<input
type="number"
value={milhas}
onChange={(e) => setMilhas(e.target.value)}
/>

<p>{resultado}</p>

<button type="submit">Converter para quilômetros</button>

</form>

        </>
    )
}
export default Exercicio5