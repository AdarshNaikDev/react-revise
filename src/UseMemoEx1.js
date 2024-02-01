import React,{useMemo, useState} from 'react'

function UseMemoEx1() {
    
    const[text,setText] = useState("");
    
    const complexCalculation = ()=>{
        let total =0;
        for(let i=0; i<100000000; i++)
        {
            total +=i;
        }
        return total;
    }

    //const sum = complexCalculation();
    // to enhance performance lets call complexCalculation in useMemo hook

    const sum = useMemo(()=>{
        return complexCalculation();
    },[])
    //console.log(sum)
   
  return (
    <>
        <div>
            <input type='text' onChange={(event)=>{setText(event.target.value)}} placeholder='enter text here'/>
            <h2>Complex calculations: {sum}</h2>
        </div>
    </>
  )
}

export default UseMemoEx1