import React, {useState, useEffect} from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
import { Route, Switch} from "react-router-dom"
import About from "../../pages/About"
import NoMatch from "../../pages/NotMatch"
import Navbar from "../components/Navbar"

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitalTodos())
  
    /*useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if(loadedTodos){
            setTodos(loadedTodos)
        }
    }, [])*/
    function getInitalTodos(){
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    })


    const handleChange = id => {
      setTodos(prevState =>
        prevState.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        })
      )
    }
  
    const delTodo = id => {
      setTodos([
        ...todos.filter(todo => {
          return todo.id !== id
        }),
      ])
    }
  
    const addTodoItem = title => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      }
      setTodos([...todos, newTodo])
    }
  
    const setUpdate = (updatedTitle, id) => {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        })
      )
    }
  
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <div className="container">
                    <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={addTodoItem} />
                    <TodosList
                        todos={todos}
                        handleChangeProps={handleChange}
                        deleteTodoProps={delTodo}
                        setUpdate={setUpdate}
                    />
                    </div>
                </div>
            </Route>
            <Route path="/about" >
                <About />
            </Route>
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
        </>
    )
  }
  
  export default TodoContainer