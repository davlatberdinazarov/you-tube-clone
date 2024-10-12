import { IconButton, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchTerm.length > 0) {
            setSearchTerm('')
            navigate(`/search/${searchTerm}`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-52 md:w-96 ">
            <Input onChange={({ target }) => setSearchTerm(target.value)} value={searchTerm} className='bg-white rounded-full border-none focus-within:border-no' placeholder='Search' icon={<IconButton variant='text' className=' relative -top-2 right-3 rounded-full'>
                <FaSearch className='text-lg text-cherry' />
            </IconButton>} labelProps={{
                className: 'sr-only',
                htmlFor: 'search',
                placeholder: 'Search',
            }} />
        </form>
    )
}
