import { Spinner } from '@material-tailwind/react'
import React from 'react'

export default function Loader() {
  return (
    <div className='w-full h-full flex items-center justify-center relative -top-12 right-8'>
         <Spinner className='text-gray-800 h-16 w-16' color="blue" />
    </div>
  )
}
