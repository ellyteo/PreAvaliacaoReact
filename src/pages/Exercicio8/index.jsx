import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio8() {

    const [num, setNum] = useState()
    const [x0, setX0] = useState()
    const [x1, setX1] = useState()
    const [x2, setX2] = useState()
    const [x3, setX3] = useState()
    const [x4, setX4] = useState()
    const [x5, setX5] = useState()
    const [x6, setX6] = useState()
    const [x7, setX7] = useState()
    const [x8, setX8] = useState()
    const [x9, setX9] = useState()
    const [x10, setX10] = useState()

    function handleSubmit(e) {
        e.preventDefault();
        setX0(Number(num) * 0)
        setX1(Number(num) * 1)
        setX2(Number(num) * 2)
        setX3(Number(num) * 3)
        setX4(Number(num) * 4)
        setX5(Number(num) * 5)
        setX6(Number(num) * 6)
        setX7(Number(num) * 7)
        setX8(Number(num) * 8)
        setX9(Number(num) * 9)
        setX10(Number(num) * 10)
    }

    return (
        <>

            <br />
            <Link to="/">
                <button>Voltar para o início</button>
            </Link>

            <form onSubmit={handleSubmit}>

                <br />
                <label>Digite um número:</label>
                <input
                    type="number"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                />

                <p>{x0}</p>
                <p>{x1}</p>
                <p>{x2}</p>
                <p>{x3}</p>
                <p>{x4}</p>
                <p>{x5}</p>
                <p>{x6}</p>
                <p>{x7}</p>
                <p>{x8}</p>
                <p>{x9}</p>
                <p>{x10}</p>

                <button type="submit">Mostrar tabuada</button>

            </form>

        </>
    )
}
export default Exercicio8