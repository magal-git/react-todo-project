import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
    
    /* var (array)todos         : TodoContainer# */
    /* var handleChangeProps */
    /* var handleClickSub1 */

    render(){
        return(
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        handleChangePropsz={this.props.handleChangeProps} 
                        handleClickSub2={this.props.handleClickSub1}
                        setUpdate={this.props.setUpdate}
                    />
                ))}
            </ul>
        )
    }
}

export default TodosList