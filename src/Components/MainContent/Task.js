import React from 'react'

const Task = (props) => {

    let textClasses =
        'text-gray-100 ' + (props.data.isCompleted ? 'line-through decoration-white/60' : '');

    return (
        <div className='flex items-center mt-2'>
            {!props.data.isCompleted ? <input type='checkbox' className='mr-4' /> : <></>}
            <p className={textClasses}>{props.data.text}</p>
        </div>
    )
}

export default Task