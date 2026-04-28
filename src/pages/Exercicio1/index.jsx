import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio1() {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [resultado, setResultado] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado(Number(num1)+Number(num2))
}

    return (
        <>
            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>
            <br /><br />

            <form onSubmit={handleSubmit}>

                <label>Digite um número:</label>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <br /><br />

                <label>Digite outro número:</label>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <br /><br />

                <p>{resultado}</p>

                <button type="submit">Somar</button>

            </form>

        </>



    )
}
export default Exercicio1