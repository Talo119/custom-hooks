import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {
    const initialState = []    

    const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
    }
    
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));        
    }, [todos])

    const handleNewTodo = (todo) =>{
        const action = {
          type: '[TODO] AddTodo',
          payload: todo,
        }
    
        dispatchTodo(action);
    
      }
    
      const handleDeleteTodo = ( id ) => {
        dispatchTodo({
          type: '[TODO] RemoveTodo',
          payload: id,
        });
      }
    
      const handleToggleTodo = ( id ) => {
        dispatchTodo({
          type: '[TODO] ToggleTodo',
          payload: id,
        });
      }


  return {
    ...todos,
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
