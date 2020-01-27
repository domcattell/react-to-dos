import React from 'react';
import TextField from "@material-ui/core/TextField"
import useInputState from './hooks/useInputState.js'

const EditTodoForm = (props) => {
    const [editTask, handleEditTask, reset] = useInputState(props.text)
    
    const updateTodo = (e) => {
        e.preventDefault();
        props.editTodo(props.id, editTask)
        reset();
        props.toggleEdit();
    }

    return (
        <form style={{width: "100%", marginLeft: "1rem"}} onSubmit={updateTodo}>
            <TextField 
                fullWidth 
                onChange={handleEditTask} 
                value={editTask}
                autoFocus
            />
        </form>
    );
}

export default EditTodoForm;
