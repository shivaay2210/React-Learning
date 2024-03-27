import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (todo, id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export default function useTodo() {
    return useContext(TodoContext)
}