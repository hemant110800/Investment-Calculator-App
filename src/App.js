import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import InputForm from './components/InputForm';
import Dtable from './components/DisplayTable';
var initial_investemnt=0; 
//  this should be defined outside because if we define inside after click caclulate btn investemnt
//  data update hota h and initial_investment also update with csavings but component will re-render
//  so again we are setting initial_investment = 0 which causes improper behaviour.
  
function App() {
  const [investment_data,setInvestment] = useState([]);
  // const [initial_investemnt,setII]= useState(0); // no need of using this state here as
  //  used concept of derived state initial_investment will autmatically update 
  // on update with investment_data witch calculate btn click event.

  // var initial_investemnt=0;  // this should be defined outside only so that on re-render this should not affect
  const update_userData = (u_data,csavings)=>{
        setInvestment(u_data);
        // setII(csavings);
       initial_investemnt = csavings
        console.log(initial_investemnt);
  }
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InputForm updateInvestment = {update_userData}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
       {investment_data.length>0 && <Dtable iData={investment_data} initialInvestemnt = {initial_investemnt}/>}
       {investment_data.length === 0 && <div className="no_dataContainer">No data Available</div>}
    </div>
  );
}

export default App;
