import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio6() {

    const [seg, setSeg] = useState()
    const [resultado1, setResultado1] = useState()
    const [resultado2, setResultado2] = useState()
    const [resultado3, setResultado3] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado1(Number(seg))
    setResultado2(Number(seg)/60)
    setResultado3(Number(seg)/3600)
}

    return (
        <>

            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>

            <form onSubmit={handleSubmit}>

                <br />
                <label>Digite a duração do evento em segundos:</label>
                <input
                    type="number"
                    value={seg}
                    onChange={(e) => setSeg(e.target.value)}
                />

<p>{resultado1} segundo(s)</p>
<p>{resultado2} minuto(s)</p>
<p>{resultado3} hora(s)</p>

<button type="submit">Calcular duração</button>

            </form>

        </>
    )
}
export default Exercicio6