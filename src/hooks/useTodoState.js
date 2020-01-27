import useLocalStorageState from './useLocalStorageState'
import uuid from 'uuid'

export default initTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initTodos)
    return {
        todos,

        addTodo: newToDoText => {
            setTodos([...todos, {id: uuid(), task: newToDoText, complete: false}])
        },

        removeTodo: id => {
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos)
        },

        toggleTodo: id => {
            const updatedTodos = todos.map(todo => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos)
        },

        editTodo: (id, editedTodo) => {
            const updatedTodos = todos.map(todo => 
                todo.id === id ? {...todo, task: editedTodo} : todo
            );
            setTodos(updatedTodos)
        }
    }
}


