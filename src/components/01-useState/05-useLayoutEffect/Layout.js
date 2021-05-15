import React, { useState, useLayoutEffect, useRef } from 'react'
import UseFetch from '../hooks/UseFetch'
import { useCounter } from '../hooks/useCounter'

import '../counter.css'

export default function Layout() {

    const [boxSize, setBoxSize] = useState({})

    const { counter, increment } = useCounter(1)

    const { data } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0]
    console.log(quote)

    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>layout Effect</h1>



            <blockquote style={{ display: 'flex' }}>
                <p
                    ref={pTag}


                >{quote}</p>


            </blockquote >

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                onClick={increment}
            >Siguiente cita</button>



        </div >
    )
}
