import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

import '../counter.css'


export default function MemoHook() {

    const { counter, increment } = useCounter(10000)

    const [show, setShow] = useState(true)

    const procesoPesado = (iteraciones) => {

        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahi vamos...joderrrrRR..!!')
        }
        return `${iteraciones} iteraciones realizadas`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <h1>MemoHook</h1>
            <h3>Counter:<small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>
            <button onClick={increment}>+1</button>

            <button onClick={() => { setShow(!show) }}>
                {JSON.stringify(show)}
            </button>

        </>
    )
}
