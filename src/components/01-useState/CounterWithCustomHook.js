import React from 'react'
import { useCounter } from './hooks/useCounter'


export default function CounterWithCustomHook() {

    const { state, increment, decrement, reset } = useCounter()
    return (
        <>
            <h1>Counter With Hook: {state}</h1>

            <hr />

            <button onClick={() => increment(2)} className='btn'>+1</button>
            <button onClick={() => decrement(3)} className='btn'>-1</button>
            <button onClick={reset} className='btn'>Reset</button>

        </>
    )
}
