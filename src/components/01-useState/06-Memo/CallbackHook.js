import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'
import 'bootstrap/dist/css/bootstrap.min.css';


import '../counter.css'


export default function CallbackHook() {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num)
        },
        [setCounter],
    )


    return (
        <div>
            <h1>useCallback Hook:{counter}</h1>
            <ShowIncrement increment={increment} />

        </div>


    )
}
