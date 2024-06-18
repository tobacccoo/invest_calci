import { useState } from "react";

export default function Return(){
    const [inInvest, setIniinvest]= useState(6);

    function handleChange(newvalue){
    
    setIniinvest(newvalue);
    
    }
    return(
        <label id="label"> Expected Return  
       <input type= "number" required value={inInvest}
         onChange={(event)=>handleChange(event.target.value)}/>
       </label> 
   );

}