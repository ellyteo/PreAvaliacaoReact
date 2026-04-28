import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio7() {

    const [km, setKm] = useState()
    const [resultado1, setResultado1] = useState()
    const [resultado2, setResultado2] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado1(Number(km)*1000)
    setResultado2(Number(km)*100000)
}

    return (
        <>

            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>

            <form onSubmit={handleSubmit}>

                <br />
                <label>Digite a distância em quilômetros</label>
                <input
                    type="number"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                />

                <p>{resultado1} metro(s)</p>
                <p>{resultado2} centímetro(s)</p>

                <button type="submit">Converter</button>

            </form>

        </>
    )
}
export default Exercicio7