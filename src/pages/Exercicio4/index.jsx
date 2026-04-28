import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio4() {

    const [graus, setGraus] = useState()
    const [resultado, setResultado] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado((9*Number(graus)+160)/5)
}

    return (
        <>

            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>

            <br /><br />
            <form onSubmit={handleSubmit}>

                <label>Digite a temperatura em graus Celsius:</label>
                <input
                type="number"
                value={graus}
                onChange={(e) => setGraus(e.target.value)}
                />

                <p>{resultado}</p>

                <button type="submit">Converter para Fahrenheit</button>

            </form>

        </>
    )
}
export default Exercicio4