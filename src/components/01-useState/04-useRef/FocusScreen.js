import React, { useRef } from 'react'

import '../counter.css'

export default function FocusScreen() {

    const inputRef = useRef()


    const handleFocus = () => {
        inputRef.current.select()
        console.log(inputRef)

    }



    return (
        <div>
            <h1>Focus Screen</h1>

            <input ref={inputRef} className='input' placeholder='su nombre' />

            <div>
                <button
                    onClick={handleFocus}
                    style={{ marginTop: '5px' }} >Focus</button>
            </div>
        </div>
    )
}
