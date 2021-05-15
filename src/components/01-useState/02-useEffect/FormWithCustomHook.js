import React from 'react'
import '../counter.css'
import { useForm } from '../hooks/useForm'


export default function FormWithCustomHook() {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }




    return (
        <>

            <h1>Form withCustom Hook</h1>
            <hr />
            <form onSubmit={handleSubmit}>

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
                        autoComplete='off'
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>

                    <input
                        type='password'
                        name='password'
                        placeholder='*******'
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type='submit'>Guardar</button>
            </form>



        </>
    )
}
