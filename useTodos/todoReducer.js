
export const todoReducer = (initialSate = [], action) => {


    switch (action.type) {
        case '[TODO] AddTodo':
            return  [ ...initialSate, action.payload ]

        case '[TODO] RemoveTodo':
            //El filter crea un nuevo arreglo.
            return initialSate.filter( todo => todo.id !== action.payload )
        
        case '[TODO] ToggleTodo':
            return initialSate.map( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            } )
        default:
            return initialSate;
    }
}