import React from 'react'
import UseFetch from '../hooks/UseFetch'
import { useCounter } from '../hooks/useCounter'

import '../counter.css'

export default function MultipleCustomHooks() {

    const { counter, increment } = useCounter(1)

    const { loading, data } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]
    console.log(author, quote)

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>

            {loading
                ?
                (

                    <div>
                        Loading
                    </div>
                )
                :
                (

                    <blockquote>
                        <p>{quote}</p>
                        <footer>{author}</footer>

                    </blockquote>

                )

            }
            <button
                onClick={increment}
            >Siguiente cita</button>



        </div>
    )
}
