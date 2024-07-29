import { IconButton, Input } from '@material-tailwind/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className=' bg-black p-5 flex justify-between'>
            <div>
                <img width='45' src="/logo.png" alt="logopng" />
            </div>


            <div className="w-52 md:w-96 ">
                <Input className='bg-white rounded-full border-none focus-within:border-no' placeholder='Search' icon={<IconButton variant='text' className=' relative -top-2 right-3 rounded-full'>
                    <FaSearch className='text-lg text-cherry' />
                </IconButton>} labelProps={{
                    className: 'sr-only',
                    htmlFor: 'search',
                    placeholder: 'Search',
                }} />
            </div>
        </nav>
    )
}
