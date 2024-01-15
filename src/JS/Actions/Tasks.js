import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionsTypes/ActionTypes"

//add task 
export const addtask=(NewTask)=>{
    return{
        type:ADD_TASK,
        payload:NewTask 
    }
}

//delete task
export const deletetask=(id)=>{
    return{
        type:DELETE_TASK,
        payload:id

    }
}
//done Task
export const donetask=(id)=>{
    return{
        type:DONE_TASK,
        payload:id

    }}
//edit the task 
export const edittask=(id,NewName)=>{
    return{
        type:EDIT_TASK,
        payload:{id,NewName}

    }
}