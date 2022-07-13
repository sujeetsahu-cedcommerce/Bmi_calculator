import React, { Component } from "react";

export default class BillCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total_units: "",
      total_price: "",
      
    };
  }

  Units_handler = (event) => {
    // alert(event.target.value);
    this.setState({
      total_units:event.target.value,
    })
  };

  Calculate_Bill = () => {
    let units = this.state.total_units;
    let price;
    if(units<=50){
      price = "₹"+parseFloat(units*3.50).toFixed(2);
    }
    else if(units>50 && units<=150){
      price ="₹"+parseFloat( 50*3.50 + (units-50)*4.0).toFixed(2);
    }
    else if(units>150 && units<=250){
      price = "₹"+parseFloat(50*3.50 + 100*4.0 + (units-150)*5.20).toFixed(2);
    }
    else if(units>250){
      price = "₹"+parseFloat(50*3.50 + 100*4.0 + 100*5.20 + (units-250)*6.50).toFixed(2);
    }
    this.setState({
      total_price:price
    })
  };

  render() {
    return (
      <div style={{}}>
        <div style={{ width: "50%", margin: "auto" }}>
          <h3>BILL CALCULATOR</h3>
          <div style={{ marginBottom: "2%" }}>
            <label style={{ marginRight: "2rem" }}>Units:</label>
            <input type="text" placeholder="enter units" onChange={this.Units_handler}/>
          </div>
          <button onClick={this.Calculate_Bill}>Calculate</button>
          <h3>{this.state.total_price}</h3>
        </div>
      </div>
    );
  }
}
