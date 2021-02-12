import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    
    /* var (array)todo           : TodoList; */
    /* var handleChangePropsz() */
    /* var handleClickSub2() */
    /* func setEditValue() */

    state = {
        editing: false
    }

    componentWillUnmount(){
        console.log('Unmonting')
    }

    handleEditing = () => {
        this.setState({
            editing: true
        })
    }

    handleUpdateDone = (event) => {
        if(event.key === "Enter"){
            this.setState({
                editing: false
            })
        }
    }

    render(){

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
          
        const { id, title, completed } = this.props.todo  

        let viewMode = {}
        let editMode = {}
        if(this.state.editing){
            viewMode.display = "none"
        }else{
            editMode.display = "none"
        }

        return <li className={styles.item}>
            <input 
                type="checkbox"
                className={styles.checkbox} 
                checked={completed} 
                onChange={() => this.props.handleChangePropsz(id)} 
            />
            
            <button
                onClick={() => this.props.handleClickSub2(id)}>Delete
            </button>

            <span style={this.props.todo.completed ? completedStyle : null}>
                {title}
            </span>
            <button onClick={this.handleEditing} style={viewMode}>edit</button>
            <input 
                type="text" 
                className={styles.textInput} 
                style={editMode}
                value={title}
                onChange={(e) => {
                    this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdateDone}
            />
        </li>
    }
}

export default TodoItem