import { useState } from "react";

export default function Duration(){
    const [inInvest, setIniinvest]= useState(10);

    function handleChange(newvalue){
    
    setIniinvest(newvalue);
    
    }
    return(
        <label id="label"> Duration 
       <input type= "number" required value={inInvest}
         onChange={(event)=>handleChange(event.target.value)}/>
       </label> 
   );

}