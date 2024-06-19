export default function UserInput({onChnge, userInput}){


    return(
        <section id="user-input"> 
        <div className="input-group">
            <p>
            <label >Initial Investment  </label>
        <input type= "number" required 
        value={userInput.Initialinvestment}
         onChange={(event)=> onChnge('Initial investment',event.target.value)}/>
            </p>
            <p>
            <label >Annual Investment  </label>
        <input type= "number" required 
        value={userInput.annualInvestment}
         onChange={(event)=>onChnge('Annual investment',event.target.value)} />       
            </p>
            </div>
            <div className="input-group">
            <p>
            <label >Expected Return  </label>
        <input type= "number" required 
         value={userInput.expectedReturn}
         onChange={(event)=>onChnge('Expected return',event.target.value)}/>
        
            </p>
            <p>
            <label >Duration </label>
        <input type= "number" required 
         value={userInput.duration}
         onChange={(event)=>onChnge('Duration',event.target.value)}
         />
            </p>
            </div>
            </section>
    );
}