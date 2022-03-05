import React from 'react'
import Task from './Task'

const TaskSet = (props) => {
    let data = props.data;
    let title = props.title;
    return (
        <div className='my-14'>
            <p className='mb-8'>{title}</p>
            <div className='h-48 overflow-x-auto'>
                {
                    data.map((e, i) => {
                        return <Task data={e} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default TaskSet