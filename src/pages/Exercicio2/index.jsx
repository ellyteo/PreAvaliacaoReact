import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio2() {

    const [valor, setValor] = useState()
    const [horas, setHoras] = useState()
    const [resultado, setResultado] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado(Number(valor)*Number(horas))
}

    return (
        <>
            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>

            <br /><br />
            <form onSubmit={handleSubmit}>

                <label>Digite o valor ganho por hora:</label>
                <input
                    type="number"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />

                <br /><br />
                <label>Digite quantas horas foram trabalhadas:</label>
                <input
                    type="text"
                    value={horas}
                    onChange={(e) => setHoras(e.target.value)}
                />

                <hr />
                <p>{resultado}</p>

                <button type="submit">Calcular salário</button>

            </form>

        </>
    )
}
export default Exercicio2