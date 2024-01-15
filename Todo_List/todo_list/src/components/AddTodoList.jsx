import react, {useState} from 'react';
import './AddTodoList.css';

const AddTodoList = ({inp, setinp, todos, setTodos}) =>{
    
    const handleInput = (e) =>{
        setinp(e.target.value);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        // console.log(todos);
        setTodos([
            ...todos,
            {"text":inp, "key": todos.length+1},
               
        ]);
        setinp("");
    }

    return(
       <div className='container'>
         
           <form action="" className='form'>
           <input value={inp} onChange={handleInput} type="text" name="input" className='inptxt'/>
           <button className='icon' onClick={handleClick}>
               <i className="fa-solid fa-square-plus"></i>
           </button>
           {/* <p>{inp}</p> */}
           </form>
         
       </div>
    );
}

export default AddTodoList;