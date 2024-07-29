import { Button } from '@material-tailwind/react'
import React from 'react'
import { categories } from '../utils/constant'

export default function Sidebar({ setSelectedCategory, selectedCategory }) {

    return (
        <div className='h-[90vh] min-w-60 p-4 flex flex-col gap-5 overflow-y-scroll'>
            {categories.map((category, index) => {
                return (
                    <Button onClick={() => setSelectedCategory(category.name)} 
                    className={`${selectedCategory == category.name ? 'bg-cherry ': 'bg-transparent'}  group px-6 transition ease-in duration-300 flex items-center gap-4 w-full rounded-full min-h-[45px] normal-case text-md hover:bg-cherry`}>
                        <div 
                        className={`${ selectedCategory == category.name ? 'text-white' : 'text-cherry' } !text-2xl group-hover:text-white  transition-all ease-in duration-300`}>
                            {category.icon}
                        </div>
                        <span className='text-gray-100 text-sm font-semibold'>{category.name}</span>
                    </Button>
                )
            })}
            <p className='px-6'>Davlatbek 2024 </p>
        </div>
    )
}
