import React from 'react'
import { useState} from 'react'

const Form = () => {
  const [name ,setName] =useState({firstName:"",lastName:""});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        
    }
  return (
    // by deafult form will refresh the page so we need to prevent that
    // we can prevent that by using e.preventDefault() method
    // we can also use onSubmit event on form tag
    // <form onSubmit={handleSubmit}>
    //     <input type="text" name="name" id="name" placeholder="Enter your name" />
    //     {/*  we can also use onClick event on button tag */}
    //     <button>Submit</button> 
    // </form>

    <form>
    <input 
        type="text" 
        value={name.firstName} 
        onChange={(e) => setName({ ...name, firstName: e.target.value })}/>
    
    <input 
        type="text" 
        value={name.lastName} 
        onChange={(e) => setName({ ...name, lastName: e.target.value })} />
    
    <button onClick={(e) => handleSubmit(e)}>Submit</button>
</form>
  )
}

export default Form