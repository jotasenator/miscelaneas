import React, { useState } from 'react'
import '../counter.css'

export const Simulator = ({ data }) => {

    const [contador, setContador] = useState(0)
    const [textData, setTextData] = useState(data[0])

    const handleReset = () => {
        setContador(0)
        setTextData(data[0])
    }
    const handlePreview = () => {
        if (contador > 0 && contador < data.length) {

            setContador(contador - 1)
            setTextData(data[contador - 1])
        }
    }

    const handleNext = () => {
        if (contador >= 0 && contador <= data.length - 2) {
            setContador(contador + 1)
            setTextData(data[contador + 1])

        }

    }

    console.log(contador)






    return (
        <div className='simulator-text'>
            <div className='simulator'>
                <button
                    onClick={handleReset}

                >
                    Reset
            </button>
                <button
                    onClick={handlePreview}

                >
                    Preview
            </button>
                <button
                    onClick={handleNext}
                >
                    Next
            </button>

            </div>
            <h1>{textData.title}</h1>
            <p>{textData.text}</p>
        </div>
    )
}
