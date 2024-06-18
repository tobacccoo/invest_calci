import Logo from "../util/investment-calculator-logo.png"
export default function Header(){
    return (
        <div id="header">
            <img src={Logo}/>
         <h1>Investment Calculator</h1>
        </div>);
}