import Header from "./components/Header"
import InitialInvest from "./components/InitialInvest"
import Annual from "./components/Annual";
import Return from "./components/Ex_return";
import Duration from "./components/Duration";

function App() {
  return (<>
    <Header/>
    <div id="user-input">
       <span className="input-group">
       <InitialInvest/> 
       <Annual/>
       <Return/>
       <Duration/>
       </span>
    </div>
    </>
  );
}

export default App
