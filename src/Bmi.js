import React, { Component } from "react";

export default class Bmi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      weight: "",
      BMI: "",
      weight_status: "",
    };
  }

  Height_Handler = (event) => {
    this.setState({
      height: event.target.value,
    });
  };

  Weight_Handler = (event) => {
    this.setState({
      weight: event.target.value,
    });
  };

  Calculate_Bmi = () => {
    let h = parseInt(this.state.height) / 100;
    let w = parseInt(this.state.weight);
    h = Math.pow(h, 2);
    var bmi = w / h;
    bmi = bmi.toFixed(2);
    let status;
    if (bmi <= 18.5) {
      status = "UnderWeight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Healthy Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = "Over Weight";
    } else {
      status = "Obesity";
    }
    this.setState({
      weight_status: status,
    });
  };
  render() {
    return (
      <div style={{}}>
        <div style={{ width: "50%", margin: "auto" }}>
          <h3>MEASURE YOUR BMI</h3>
          <div style={{marginBottom:"2%"}}>
          <label style={{ marginRight: "2rem" }}>Height:</label>
          <input type="text" placeholder="height in meter" onChange={this.Height_Handler}/>
          </div>
          
          <div style={{marginBottom:"2%"}}>
          <label style={{ marginRight: "1.8rem" }}>Weight:</label>
          <input
            type="text"
            placeholder="Weight in kg"
            onChange={this.Weight_Handler}
          />
          </div>
          <button onClick={this.Calculate_Bmi}>Calculate</button>
          <h3>{this.state.weight_status}</h3>
        </div>
      </div>
    );
  }
}
