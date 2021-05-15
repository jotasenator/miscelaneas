import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import '../counter.css'

export default function RealExampleRef() {

    const [show, setShow] = useState(false)

    const handleButton = () => {
        setShow(!show)
    }



    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                onClick={handleButton}
            >
                Show/Hide
            </button>


        </div>
    )
}
