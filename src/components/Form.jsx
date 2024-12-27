import React from 'react'

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form was subumitted"); 
    }
  return (
    // by deafult form will refresh the page so we need to prevent that
    // we can prevent that by using e.preventDefault() method
    // we can also use onSubmit event on form tag
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Enter your name" />
        {/*  we can also use onClick event on button tag */}
        <button>Submit</button> 
    </form>
  )
}

export default Form