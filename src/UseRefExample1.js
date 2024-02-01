import React,{Fragment, useRef} from 'react'

function UseRefExample1() {

    const a = useRef("Adarsh")
    console.log(a.current)

    function changeVal(){
        console.log("clicked")
        a.current = "Adarsh get up u can do it"
        console.log(a.current)
    }
  return (
    <Fragment>
 <div>Value at present is : {a.current}</div>
    <button onClick={changeVal}>click me</button>
    </Fragment>
   
  )
}

export default UseRefExample1