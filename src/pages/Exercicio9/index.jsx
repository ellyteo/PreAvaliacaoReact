import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio9() {

    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()
    const [nota3, setNota3] = useState()
    const [resultado, setResultado] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado((Number(nota1)+Number(nota2)+Number(nota3))/3)
}

    return (
        <>

            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>

            <form onSubmit={handleSubmit}>

                <br /><br />
                <label>Digite a 1° nota</label>
                <input
                    type="number"
                    value={nota1}
                    onChange={(e) => setNota1(e.target.value)}
                />

                <br /><br />
                <label>Digite a 2° nota</label>
                <input
                    type="number"
                    value={nota2}
                    onChange={(e) => setNota2(e.target.value)}
                />

                <br /><br />
                <label>Digite a 3° nota</label>
                <input
                    type="number"
                    value={nota3}
                    onChange={(e) => setNota3(e.target.value)}
                />

                <p>{resultado}</p>

                <button type="submit">Calcular média</button>

            </form>

        </>
    )
}
export default Exercicio9