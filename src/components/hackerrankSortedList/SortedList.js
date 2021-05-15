import React, { useState } from 'react'

import './simulator.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'



export const SortedList = ({ data }) => {

    const [upvote, setUpvote] = useState('')
    const [votes, setVotes] = useState('')
    const [date, setDate] = useState('')


    const handleUpvoted = () => {
        setUpvote(true)
        let porVotos = data.sort((a, b) => {
            // Es necesario obtener la propiedad data# de cada elemento
            let aVotes = a[Object.keys(a)[0]].upvotes
            let bVotes = b[Object.keys(b)[0]].upvotes
            return bVotes - aVotes
        });
        setVotes(porVotos)



    }

    const handleRecent = () => {

        setUpvote(false)
        let porFecha = data.sort((a, b) => {
            // Es necesario obtener la propiedad data# de cada elemento
            let aDate = a[Object.keys(a)[0]].date
            let bDate = b[Object.keys(b)[0]].date

            // console.log(aDate)
            // Comparar como cadena
            return bDate.localeCompare(aDate)
        })
        setDate(porFecha)
    }






    return (
        <div className='container'>
            <div className='button-class'>

                <button
                    onClick={handleUpvoted}
                    className='btn btn-success'>
                    Most Upvoted
                </button>
                <button
                    onClick={handleRecent}
                    className='btn btn-success'>
                    Most Recent
                </button>
            </div>
            <hr />
            <div className=' table table-striped table-bordered table-hover'>

                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Upvotes</th>
                            <th scope='col'>Date</th>

                        </tr>
                    </thead>

                    <tbody>

                        {(
                            () => {
                                if (upvote === '') {
                                    return (
                                        data.map((info, index) => (
                                            <tr key={index} >
                                                <td>{Object.values(info)[0].title}</td>
                                                <td>{Object.values(info)[0].upvotes}</td>
                                                <td>{Object.values(info)[0].date}</td>
                                            </tr>

                                        ))
                                    )
                                } else if (upvote === false) {
                                    return (
                                        date.map((info, index) => (
                                            <tr key={index} >
                                                <td>{Object.values(info)[0].title}</td>
                                                <td>{Object.values(info)[0].upvotes}</td>
                                                <td>{Object.values(info)[0].date}</td>
                                            </tr>

                                        ))
                                    )
                                } else if (upvote === true) {
                                    return (
                                        votes.map((info, index) => (
                                            <tr key={index} >
                                                <td>{Object.values(info)[0].title}</td>
                                                <td>{Object.values(info)[0].upvotes}</td>
                                                <td>{Object.values(info)[0].date}</td>

                                            </tr>
                                        ))
                                    )
                                }
                            }
                        )()

                        }
                    </tbody>

                </table>
            </div>
        </div >
    )
}
