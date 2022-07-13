import React, { Component } from "react";

export default class EmiClaculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loan_amout:"",
        interest:"",
        year:"",
        month:"",
        Period:"",
        Total_interest:"",
        Total_payment:"",
        Monthly_Emi:"",
        EMI:"",
    };
  }

  Loan_Amount = (event) => {
    this.setState({
        loan_amout:event.target.value,
    })
  }
  
  Interest_rate = (event) => {
    this.setState({
        interest:event.target.value,
    })
  }

  Year = (event) => {
    this.setState({
        year:event.target.value,
    })
  }

  Month = (event) => {
    this.setState({
        month:event.target.value,
    })
  }
  
  Calculate = () => {
      let m=0;
      let y=0;
      let total_time_period;
      let l_amount = parseInt(this.state.loan_amout);
      let rate = parseInt(this.state.interest);
      y = parseFloat(this.state.year)*12;
      m = parseFloat(this.state.month);

      if(y && m){
        total_time_period = parseFloat(y+m);
      }
      else if(y){
        total_time_period = y;
      }
      else if(m){
        total_time_period = m;
      }

      let myEmi = (l_amount*(rate/1200)*Math.pow((1+(rate/1200)),total_time_period))/(Math.pow((1+(rate/1200)),total_time_period)-1)
      myEmi = myEmi.toFixed(2)

      this.setState({
        EMI:myEmi,
        Period:total_time_period,
      })
  }

  Reset = () => {
       this.setState({
        loan_amout:"",
        interest:"",
        year:"",
        month:"",
        Total_interest:"",
        Total_payment:"",
        EMI:"",
       })   
  }
  
  Details = () => {
      let payment = this.state.EMI*this.state.Period;
     
      this.setState({
        Monthly_Emi:this.state.EMI,
        Total_interest:payment-this.state.loan_amout,
        Total_payment:payment,
      })
  }

  render() {
    return (
       <div style={{alignContent:""}}>
        <div className="container_div" style={{ width: "50%", margin: "auto",border:"1px solid black"}}>
        <h3 style={{textAlign:"center"}}>EMI Calculator</h3>
         <table className="table">
             <tr>
                 <td>Loan Amount:</td>
                 <td><input type="text" onChange={this.Loan_Amount} value={this.state.loan_amout}/></td>
             </tr>
             <tr>
                 <td>Interest %:</td>
                 <td><input type="text" onChange={this.Interest_rate} value={this.state.interest}/></td>
             </tr>
             <tr>
                 <td>Period:</td>
                 <td><input type="text" onChange={this.Year} value={this.state.year}/></td> 
                 <td><input type="text" onChange={this.Month} value={this.state.month}/></td>
             </tr>
             <tr>
                 <td>EMI:</td>
                 <td><input type="text" value={this.state.EMI}/></td>
             </tr>
         </table>

         <div className="btn_div">
            <button className="btn" onClick={this.Calculate}>Calculate</button>
            <button className="btn" id="btn_middle" onClick={this.Reset} >Reset</button>
            <button className="btn" onClick={this.Details}>Details</button>
         </div>

          <table className="show_details">
              <tr>
                  <td>Monthly EMI</td>
                  <td><input type="text" value={this.state.Monthly_Emi}/></td>
              </tr>
              <tr>
                  <td>Total Interest</td>
                  <td><input type="text" value={this.state.Total_interest}/></td> 
                  <td><input type="text" style={{visibility:"hidden"}}/></td> 
              </tr>
              <tr>
                  <td>Total Payment</td>
                  <td><input type="text" value={this.state.Total_payment}/></td> 
              </tr>
          </table>
        </div>
        </div>
    );
  }
}
