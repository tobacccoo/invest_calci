import { useState } from "react";

export default function Annual(){
    const [inInvest, setIniinvest]= useState(1000000);

    function handleChange(newvalue){
    
    setIniinvest(newvalue);
    
    }
    return(
         <label id="label" >Annual Investment  
        <input type= "number" required 
         value={inInvest}
         onChange={(event)=>handleChange(event.target.value)}
         />
        </label> 
    );
}