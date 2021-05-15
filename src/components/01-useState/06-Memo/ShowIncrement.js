import React from 'react'

export default React.memo(function ShowIncrement({ increment }) {

    console.log('Me volvi  a generar :(')
    return (
        <>
            <button
                onClick={() => increment(5)}
                className='btn btn-primary'>
                Incrementar
            </button>
        </>
    )
})
