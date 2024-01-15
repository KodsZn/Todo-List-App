import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Task.css';
import { addtask, deletetask } from '../../JS/Actions/Tasks';
const TaskList = () => {
    const dispatch=useDispatch();
    const Tasks=useSelector((state)=>state.TaskReducer.Tasks)
    const [newtTask,setNewTask]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();};

console.log(Tasks)
  return (
    <div>
        <section className="container">
                <div className="heading">
                    <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"/>
                    <h1 className="heading__title">To-Do List</h1>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                    <label className="form__label" for="todo">~ Today I need to ~</label>
                    <input className="form__input"
                        type="text"

                        onChange={(e)=>setNewTask(e.target.value)}
                        name="to-do"
                        size="30"
                        required  
                        />
                    <button className="button" type='submit' onClick={()=>(dispatch(addtask({id:Math.random(),description:newtTask,IsDone:false})))} ><span>Submit</span></button>
                    </div>
                </form>
                <div>
                    <ul className="toDoList">
                    {Tasks.map((task) => (
                        <li key={task.id} onClick={()=>dispatch(deletetask(task.id))}>
                            {task.description} 
                        </li>))}
                    
                    

                    </ul>
                </div>
</section>


    </div>
  )
}

export default TaskList