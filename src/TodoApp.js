import React, {useEffect} from 'react';
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodoState from './hooks/useTodoState'

const TodoApp = () => {
    const initTodos = [{id: 1, task: "be a bad bwoi", completed: false}]
    const {todos, removeTodo, addTodo, toggleTodo, editTodo} = useTodoState(initTodos)
    
    return (
        <Paper style={{padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa"}} elevation={0}>
            <AppBar color="primary" position="static" style={{height: "64px"}}>
                <ToolBar>
                    <Typography color="inherit">Todos with hooks</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}> 
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList editTodo={editTodo} todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
