import React from 'react'
import Header from './Header/Header'
import SidebarList from './SidebarList/SidebarList'

const Sidebar = () => {

    let todoList = ['Test', 'JAff', 'Sindhu'];
    let categories = ['Gaming', 'Health', 'Learning']

    return (
        <div className='flex flex-col justify-start items-center text-gray-100 border-r border-white border-opacity-30'>
            <Header />
            <div className='flex flex-col h-full'>
                <SidebarList data={todoList} />
                <SidebarList data={categories} />
            </div>
        </div>
    )
}

export default Sidebar