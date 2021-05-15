import React from 'react'
import { Hijo } from './Hijo'
import { useState, useCallback } from 'react';
import '../counter.css'

import 'bootstrap/dist/css/bootstrap.min.css'

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    // const incrementar = (num) => {
    //     setValor(valor + num)
    // }

    const incrementar = useCallback(
        (num) => {
            setValor(valor => valor + num)
        },
        [setValor],
    )




    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>


                    </div>
                </div>

            </div>
        </div>
    )
}
