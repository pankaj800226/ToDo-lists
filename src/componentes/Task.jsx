import React from 'react'
import { ImCross } from "react-icons/im"
// import { MdEditDocument } from 'react-icons/md'

const Task = ({ tital, description, deleteTask, index }) => {
    return (
        <div className='task'>
            <div>
                <p>{tital}</p>
                <span>{description}</span>
            </div>

            {/* <MdEditDocument /> */}

            <button onClick={() => deleteTask(index)}>

                <ImCross />
            </button>

        </div>
    )
}

export default Task