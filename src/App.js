// import logo from './logo.svg';
import './App.css';
import './style.css';
import Bmi from "./Bmi.js"
import BillCalculator from "./BillCalculator.js";
import EmiClaculator from './EmiClaculator';

function App() {
  return (
    <div className="">
      <Bmi/>
      <br/>
      <BillCalculator/> <br/>
      <EmiClaculator/>
    </div>
  );
}

export default App;
