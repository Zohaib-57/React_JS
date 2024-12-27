import React from 'react'

const Button = () => {
    let handleClick = () => {
        console.log('Button Clicked');
    }
    let handlepara=()=>{
        console.log("I am mouse over"
        );
        
    }
  return (
    <div>
        <button onClick={handleClick}>
            Click Me!
        </button>
        {/* writing the function with the parenthesis () means execute the fucntion  at the runtime...  */}
        {/* <p onMouseOver={handlepara()}>Move over the mouse on me.</p> */}

        <p onMouseOver={handlepara}>Move over the mouse on me.</p>

    </div>
  )
}

export default Button;