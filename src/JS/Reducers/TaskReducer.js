import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionsTypes/ActionTypes"

//initialState
const initialState={ 
    Tasks:[
        {
            id:Math.random(),
            description:"Drink water",
            IsDone:false
        },
        {
            id:Math.random(),
            description:"sleep early",
            IsDone:true
        },
        {
            id:Math.random(),
            description:"read a book",
            IsDone:false
        }
    ]

}
//pure function
const TaskReducer=(state=initialState,{type,payload})=>{
    
        switch (type) {
            case ADD_TASK: 
                return{...state,Tasks:[...state.Tasks,payload]}
            case DELETE_TASK:
                return{...state,Tasks:state.Tasks.filter(el=>el.id!==payload)}
            case DONE_TASK:
                return{...state,Tasks:state.Tasks.map((e)=>e.id==payload?{...e,IsDone:!e.IsDone}:e)}
            case EDIT_TASK:
                return{...state,Tasks:state.Tasks.map((e)=>e.id==payload.id?{...e,name:payload.NewName}:e)}
            default:
                return state; 
                
        }
    }
export default TaskReducer

    
