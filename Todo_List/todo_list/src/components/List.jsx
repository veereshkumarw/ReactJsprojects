import './List.css';
import {useState} from 'react';


const List = ({input,todos,setTodos}) =>{

    // const [tod, setTod] = useState({});

    const handleDelete = (event, id) =>{
        event.preventDefault();
        // console.log(id);
        setTodos(todos.filter((ele)=>ele.key !== id));
    }

    return(
    <>
       {todos.map(todo => 
       
        (<div className="list_items">
           <p>{todo.text}</p>
           <button className='list-icon' onClick={(event)=>handleDelete(event,todo.key)}><i class="fa-solid fa-trash"></i></button>
        </div>)
        
           )
        }
    </>  
    );
    
}

export default List;