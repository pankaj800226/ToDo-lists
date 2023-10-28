import React, { useEffect, useState } from 'react'
import Task from './Task'
const Home = () => {

  const initialArray = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  const [task, setTask] = useState(initialArray);
  const [tital, setTital] = useState("");
  const [description, setDescription] = useState("");
  console.log(tital, description);

  const submithandle = (e) => {
    e.preventDefault();
    setTask([...task, { tital, description }])
    setTital("")
    setDescription("")
  }

  const deleteTask = (index) => {
    const filterArr = task.filter((val, i) => {
      return i !== index;
    })
    setTask(filterArr)
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  },[task])

  return (
    <div className='container'>
      <h1> <span><img src="notes.png" alt="pic" /></span> DAILY GOALS</h1>
      <form onSubmit={submithandle}>
        <input type="text" placeholder='Tital...'
          value={tital}
          onChange={(e) => setTital(e.target.value)}
        />

        <textarea placeholder='Deiscrption...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
      </form>

      {task.map((item, index) => {
        return (
          <Task key={index}
            tital={item.tital}
            description={item.description}
            deleteTask={deleteTask}
            index={index}

          />
        )
      })}
    </div>
  )
}

export default Home