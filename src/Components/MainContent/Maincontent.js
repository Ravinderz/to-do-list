import React from 'react'
import TaskSet from './TaskSet'

const Maincontent = (props) => {
    //let data = props.data;
    let data = [{ text: 'This is a task', isCompleted: false }, { text: 'Get groceries', isCompleted: false }, { text: 'What need to be done', isCompleted: false }, { text: 'how much', isCompleted: false }, { text: 'how will this be', isCompleted: false }, { text: 'will it overflow', isCompleted: false }];
    let CompletedData = [{ text: 'This is a done Task', isCompleted: true }, { text: 'OMG its completed', isCompleted: true }];

    return (
        <div className='mt-14 ml-14 text-gray-100'>
            <TaskSet data={data} title={'UPCOMING'} />
            <TaskSet data={CompletedData} title={'COMPLETED'} />
        </div>
    )
}

export default Maincontent