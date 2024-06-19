import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {

  const[input, setUseinput]= useState({
    initialInvestment: 10000,
    annualInvestment: 100000,
    expectedReturn: 6,
    duration: 10,
  });

    function handleChange({inputidentifier, newvalue}){
      setUseinput((prevUserinput)=>{
        return {
        ...prevUserinput , [inputidentifier] : +newvalue,
      };      
    });
    }


  return (<>
    <Header/>
    <UserInput onChnge= {handleChange} userInput={input}/>
    <Results userInput={input}/>
    </>
  );
}

export default App
