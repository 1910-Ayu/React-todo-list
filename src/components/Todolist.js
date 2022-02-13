import React from 'react'

const Todolist = ({todos,setTodos,setEditTodo}) => {

    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo) => todo.id !=id))
    };
    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item) =>
            {
                if(item.id === todo.id)
                {
                    return {...item ,completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit =({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    return (
        <div>
           {
               todos.map((todo)=>
               (
                   <li className="list-item" key = {todo.id}>

                    <input type="text" value={todo.title} 
                    className= {`list ${todo.completed ? "completed" : ""}`}
                    onchange = {(event)=> event.preventDefault} 
                    style = {(todo.completed) ? {textDecoration: 'line-through'} : null }
                    /> 

                    <div>
                        <button className="button-complete task-button"
                        onClick={()=> handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button"
                        onClick={()=> handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button"
                        onClick={()=> handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                    </li>

               )
               )
           }
        </div>
    )
}

export default Todolist
