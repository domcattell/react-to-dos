import React from 'react';
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import useInputState from './hooks/useInputState.js'
import Button from '@material-ui/core/Button'

const TodoForm = (props) => {
    const [todoItem, handleTodoItem, reset] = useInputState("")

    const addNewItem = (e) => {
        e.preventDefault();
        props.addTodo(todoItem);
        reset();
    }

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form action="" onSubmit={addNewItem}>
                <TextField margin="normal" label="add new todo" fullWidth value={todoItem} onChange={handleTodoItem} />
            </form>
        </Paper>
    );
}

export default TodoForm;
