import React, {useState} from "react";

function DropDownProblem() {

    const[cities , setCity] = useState(null)
    const apiResponse = [{name:"India", value:"IND", city: ["Bangalore","Mumbai","Delhi","Kolkata","Pune"]},
    {name:"Pakistan", value:"PAK", city: ["Lahore","Rawalpindi","Islamabad","Karachi","Balochistan"]}];
  
    
  
    function clickHandler(event){
      console.log("Selected country:", event.target.value)
      const val = event.target.value;
      let res = apiResponse.filter((item)=>item.value ===val)
  console.log("result",res)
    setCity(res[0].city);
     
      
    }
  
    function cityHandler(event){
      console.log("selected city is ", event.target.value)
    }
    return (
      <>
      <h3>Drop down problem</h3>
       <p>Choose your Country</p>
  
       <select onChange={clickHandler}>
        <option value="null">Select</option>
        {apiResponse?.map((item,index)=>{
          return <option key={item.value}  value={item.value}>{item.name}</option>
        })}
       </select>
  
       <p>Choose your City</p>
  
       <select onChange={cityHandler}>
        <option value="null">Select</option>
        {cities?.map((item,index)=>{
          return <option key={index}>{item}</option>
        })}
       </select>
  
  
      </>
     
    
    );
  }

export default DropDownProblem;