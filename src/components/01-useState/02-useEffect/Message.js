import React, { useEffect, useState } from 'react'

export default function Message() {

    const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const mouseMove = ({ x, y }) => {
            setCoordenadas({ x: x, y: y })
        }

        console.log('Objeto montado')
        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log('objeto desmontado')
            window.removeEventListener('mousemove', mouseMove)

        }
    }, [])
    return (
        <>
            <h3>Eres Genial!!</h3>

            x:{coordenadas.x} y:{coordenadas.y}
        </>
    )
}
