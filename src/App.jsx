import Header from "./components/Header"
import InitialInvest from "./components/InitialInvest"
import Annual from "./components/Annual";

function App() {
  return (<>
    <Header/>
    <div id="user-input">
       <p><InitialInvest/> <Annual/></p>
    </div>
    </>
  );
}

export default App
