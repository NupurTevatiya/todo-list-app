export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = (tasks) => {
    return {
        type: "ADD_TASK",
        payload: tasks,
    }
} 
export const editTask = (tasks) => {
return { 
    type: "EDIT_TASK",
    payload: tasks, 
}
}

export const deleteTask = (tasks) =>{
return {
     type: "DELETE_TASK",
     payload: tasks, 
    }
}