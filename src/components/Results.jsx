import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({userInput}){

    const data = calculateInvestmentResults(userInput);
    const Initialinvestment= data[0].valueEndOfYear - data[0].interest - 
    data[0].annualInvestment;
    
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map(yearData=> {
                    const totalinterest = yearData.valueEndOfYear- yearData.annualInvestment * yearData.year- Initialinvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalinterest;


                    return (<tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalinterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
    )
}