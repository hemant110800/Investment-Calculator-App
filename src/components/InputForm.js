import React,{useState} from "react";

const InputForm = (props) => {

     const [user_investment,setUserInvestment] = useState({
        csavings:"",
        ysavings:"",
        Interest:"",
        duration:""
     })


    const calculateHandler = (event) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
         event.preventDefault();
        const yearlyData = []; // per-year results
    
        let currentSavings = +user_investment['csavings']; // feel free to change the shape of this input object!
        const yearlyContribution = +user_investment['ysavings']; // as mentioned: feel free to change the shape...
        const expectedReturn = +user_investment['Interest'] / 100;
        const duration = +user_investment['duration'];
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }
    
        props.updateInvestment(yearlyData,+user_investment['csavings']);
        // do something with yearlyData ...
      };
    
      const InputChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setUserInvestment((prevVal)=>{
            return {...prevVal,[name]:value}
        })
        console.log(user_investment);
      }
    
      const resetHandler = ()=>{
        setUserInvestment((prev)=>{
            return {...prev,csavings:"",ysavings:"",Interest:"",duration:""}
        })
        props.updateInvestment([]);
      }

    return (
        <form className="form" onSubmit={calculateHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={user_investment.csavings}  name="csavings" onChange={InputChange} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={user_investment.ysavings} name="ysavings" onChange={InputChange} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" name="Interest" value={user_investment.Interest} onChange={InputChange} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" name="duration" value={user_investment.duration} onChange={InputChange} />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )

}

export default InputForm;