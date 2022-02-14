import {ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';
import { tasks } from './states';

export let reducer = (state = tasks, action) => {
    let newTasks;
    switch (action.type) {
    case ADD_TASK:
         newTasks = [...state];
         newTasks.push(action.payload);
         return newTasks;

    case EDIT_TASK:
    break;

    case DELETE_TASK:
        newTasks = [...state];
        newTasks = newTasks.filter(tasks => tasks.id !== action.payload)
        return newTasks;
        

    default:
        return state;
}
}
// const initialState = {};

// const deleteTheList = ( state = initialState, action ) => {
//     switch (action.type) {
//         case "DELETE_TASK": return {...state,  
        
//     }
// }