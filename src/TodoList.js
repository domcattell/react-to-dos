import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    if(props.todos.length) 
        return (
        <Paper>
            <List>
                {props.todos.map((todo, i) => (
                    <>
                        <TodoItem 
                            {...todo}
                            editTodo={props.editTodo} 
                            toggleTodo={props.toggleTodo} 
                            removeTodo={props.removeTodo} 
                            // id={todo.id} 
                            // todo={todo.task} 
                            // key={todo.id} 
                            // completed={todo.completed} 
                            />
                        {i < props.todos.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
};

export default TodoList;
