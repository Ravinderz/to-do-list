import React from 'react'
import Maincontent from '../MainContent/Maincontent'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
    return (
        <div className='grid gap-1 grid-cols-4 grid-rows-1 h-full w-full bg-zinc-800'>
            <Sidebar className='divide-x divide-solid' />
            <div className='col-span-3'>
                <Maincontent />
            </div>
        </div>
    )
}

export default Layout