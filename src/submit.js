import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import logo from './img/logo.png'

// exemplo de submit de requisição usando amiibo APIRest

export default function Exemplo() {
    const [inputSearch, setInputSearch] = useState('')
    const [data, setData] = useState([])



    const getInput = (event) => {
        setInputSearch(event.target.value)

    }
    const submit = async (event) => {
        const datafetch = await fetch(`https://www.amiiboapi.com/api/amiibo/?name=${inputSearch}`)

        datafetch.json().then((amiibos) => {
            setData(amiibos.amiibo)
        })

    }


    return (
        <div>
            <div className='bg-gray-500 flex justify-around items-center h-16'>
                <img src={logo} alt='logo.png' className='w-32'></img>

                <div className='bg-white rounded-full pl-3 py-0.5 flex justify-center items-center'>
                    <input placeholder='Search...' onChange={getInput}></input>
                    <button className='bg-gray-300 rounded-full p-2 mx-1' onClick={submit}><FaSearch /></button>
                </div >
            </div>
            <div className='w-full flex justify-center'>
                <ul className='flex flex-wrap max-w-4xl justify-center'>{
                    data.map((amiibo, index) => {
                        return <li key={index} className='bg-gray-500 border-2 w-40 rounded-xl flex justify-center'>
                            <div className='text-center p-1'>
                                <h2 className='text-white'>{amiibo.character}</h2>
                                <img src={amiibo.image} alt='imagem' className='h-40 rounded-md'></img>
                            </div>
                        </li>
                    })
                }</ul>
            </div>

        </div>
    )
}