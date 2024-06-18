import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({userInput}){

    const data = calculateInvestmentResults(userInput);
    console.log(data);

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
                    return (<tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
    )
}