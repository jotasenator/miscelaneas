import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import Small from './Small'
import '../counter.css'


export default function Memorize() {

    const { counter, increment } = useCounter(10)

    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Memorize</h1>
            <h1>Counter:<Small value={counter} /></h1>
            <button onClick={increment}>+1</button>

            <button onClick={() => { setShow(!show) }}>
                {JSON.stringify(show)}
            </button>

        </>
    )
}
