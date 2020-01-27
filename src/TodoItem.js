import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'

const TodoItem = (props) => {
    const [edit, toggleEdit] = useToggleState(false);

    return (
        <ListItem style={{height: "64px"}}>
            {
            edit ? <EditTodoForm id={props.id} editTodo={props.editTodo} text={props.task} toggleEdit={toggleEdit}/> :
            <>
            <Checkbox tabIndex={-1} checked={props.completed} onClick={() => props.toggleTodo(props.id)} />
            <ListItemText style={{ textDecoration: props.completed && "line-through" }}>{props.task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <Delete onClick={() => props.removeTodo(props.id)} />
                </IconButton>
                <IconButton>
                    <Edit onClick={toggleEdit}/>
                </IconButton>
            </ListItemSecondaryAction> 
            </>
            }
        </ListItem>
    );
};

export default TodoItem;
