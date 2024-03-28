const Dtable = (props) => {
     console.log(props.initialInvestemnt)

    let table_build = []

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });


    // table_build+=
    table_build.push(

        props.iData.map((investD) => {
            return (
                <tr>
                    <td>{investD.year}</td>
                    <td>{formatter.format(investD.savingsEndOfYear)}</td>
                    <td>{formatter.format(investD.yearlyInterest)}</td>
                    <td>{formatter.format(investD.savingsEndOfYear -
                     props.initialInvestemnt - 
                     (investD.yearlyContribution * investD.year))}</td>
                    <td>{formatter.format(props.initialInvestemnt + investD.yearlyContribution * investD.year)}</td>
                </tr>
            )
        })
    )
    console.log(table_build);


    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {table_build}
            </tbody>
        </table>
    )
}

export default Dtable;