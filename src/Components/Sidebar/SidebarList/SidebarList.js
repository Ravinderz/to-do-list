import React from 'react'

const SidebarList = (props) => {

    let data = props.data;

    return (
        <div className='mb-12'>
            {
                data.map((e, i) => {
                    return <p className='p-1 capitalize'>{e}</p>
                })}
        </div>
    )
}

export default SidebarList