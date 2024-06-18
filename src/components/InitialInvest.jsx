import { useState } from "react";

export default function initialInvest(){

const [inInvest, setIniinvest]= useState(100000);

function handleChange(newvalue){

setIniinvest(newvalue);

}


return (
        <label >Initial Investment  
        <input type= "number" required value={inInvest}
         onChange={(event)=>handleChange(event.target.value)}/>
        </label> 
);

}