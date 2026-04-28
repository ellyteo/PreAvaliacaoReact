import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio3() {

    const [peso1, setPeso1] = useState()
    const [peso2, setPeso2] = useState()
    const [peso3, setPeso3] = useState()
    const [peso4, setPeso4] = useState()
    const [peso5, setPeso5] = useState()
    const [resultado, setResultado] = useState()

function handleSubmit(e) {
    e.preventDefault();
    setResultado((Number(peso1)+Number(peso2)+Number(peso3)+Number(peso4)+Number(peso5))/5)
}

    return (
        <>

            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>

            <br /><br />
            <form onSubmit={handleSubmit}>

                <label>Digite o peso da 1° pessoa</label>
                <input
                    type="number"
                    value={peso1}
                    onChange={(e) => setPeso1(e.target.value)}
                />

                <br /><br />
                <label>Digite o peso da 2° pessoa</label>
                <input
                    type="number"
                    value={peso2}
                    onChange={(e) => setPeso2(e.target.value)}
                />

                <br /><br />
                <label>Digite o peso da 3° pessoa</label>
                <input
                    type="number"
                    value={peso3}
                    onChange={(e) => setPeso3(e.target.value)}
                />

                <br /><br />
                <label>Digite o peso da 4° pessoa</label>
                <input
                    type="number"
                    value={peso4}
                    onChange={(e) => setPeso4(e.target.value)}
                />

                <br /><br />
                <label>Digite o peso da 5° pessoa</label>
                <input
                    type="number"
                    value={peso5}
                    onChange={(e) => setPeso5(e.target.value)}
                />

                <p>{resultado}</p>

                <button type="submit">Calcular média</button>

            </form>

        </>
    )
}
export default Exercicio3