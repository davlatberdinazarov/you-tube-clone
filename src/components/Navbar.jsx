import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <nav className=' bg-black p-5 flex justify-between sticky top-0 z-50'>
            <Link to='/'>
                <img width='45' src="/logo.png" alt="logopng" />
            </Link>

            <div>
                <SearchBar/>
            </div>
        </nav> 
    )
}
