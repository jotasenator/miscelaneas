import React, { useEffect, useState } from 'react'
import '../counter.css'
import Message from './Message'

export default function SimpleForm() {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        console.log('joder')
    }, [])

    useEffect(() => {
        console.log('formState ha cambiado')
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <>

            <h1>useEffect</h1>
            <hr />

            <div>
                <input
                    type='text'
                    name='name'
                    placeholder='tu nombre'
                    autoFocus
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div>

                <input
                    type='text'
                    name='email'
                    placeholder='usuario@email.com'
                    autoFocus
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>


            {name.length > 2 && <Message />}
        </>
    )
}
