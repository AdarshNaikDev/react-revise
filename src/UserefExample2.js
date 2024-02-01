import React, { useRef } from 'react'

function UserefExample2() {
    const inputElement = useRef("sdf");

    function colorHandler(){
        inputElement.current.style.backgroundColor="red"
        
    }

  return (
    <>
    <div>UserefExample2</div>
    <input type='text' ref={inputElement}/>
    <button onClick={colorHandler}>Click here to change the color!!</button>
    </>
    
    
  )
}

export default UserefExample2