import React, { Component } from "react";

export default class Bmi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      weight: "",
      BMI: "",
      weight_status: "",
      image:"",
      flag:1,
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

  Kg_Meters_Units = () => {
    this.setState({
      flag:1,
    })
  }

  Pound_Inches_Units = () => {
    this.setState({
      flag:2,
    })
  }

  Calculate_Bmi = () => {
    if(this.state.flag === 1){
      if(this.state.height && this.state.weight){
        let h = parseInt(this.state.height) / 100;
        let w = parseInt(this.state.weight);
        let photo;
        h = Math.pow(h, 2);
        var bmi = w / h;
        bmi = bmi.toFixed(1);
        console.log(bmi);
       
        let status;
        if (bmi < 18.5) {
          status = "UnderWeight";
          photo ="https://i.pinimg.com/originals/dc/29/16/dc29162110aebfed9f2365cec5ee096f.gif";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          status = "Healthy Weight";
          photo ="https://i.pinimg.com/originals/48/39/eb/4839eb4fed135f6a017eee36dd35fe61.gif";
        } else if (bmi >= 25 && bmi <= 29.9) {
          status = "Over Weight";
          photo ="https://c.tenor.com/75hezzjSDO0AAAAC/really-chillin.gif";
        } else {
          status = "Obesity";
          photo ="https://c.tenor.com/75hezzjSDO0AAAAC/really-chillin.gif";
        }
        this.setState({
          weight_status: status,
          image:photo,
        });
      }
    }
    else{
      alert(this.state.flag);

      if(this.state.height && this.state.weight){
        let h = parseInt(this.state.height);
        let w = parseInt(this.state.weight);
        let photo;
        h = Math.pow(h, 2);
        bmi = ((w / h)*703);
        bmi = bmi.toFixed(1);
        console.log(bmi);
        let status;
        if (bmi < 18.5) {
          status = "UnderWeight";
          photo ="https://i.pinimg.com/originals/dc/29/16/dc29162110aebfed9f2365cec5ee096f.gif";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          status = "Healthy Weight";
          photo ="https://i.pinimg.com/originals/48/39/eb/4839eb4fed135f6a017eee36dd35fe61.gif";
        } else if (bmi >= 25 && bmi <= 29.9) {
          status = "Over Weight";
          photo ="https://c.tenor.com/75hezzjSDO0AAAAC/really-chillin.gif";
        } else {
          status = "Obesity";
          photo ="https://c.tenor.com/75hezzjSDO0AAAAC/really-chillin.gif";
        }
        this.setState({
          weight_status: status,
          image:photo,
        });
    }
  }
  };
  render() {
    if(this.state.flag===1){
      return (
        <div style={{}}>
          <div style={{ width: "50%", margin: "auto",border:"1px solid black",textAlign:"center",backgroundColor:"grey" }}>
            <h3>MEASURE YOUR BMI</h3>
            <button style={{padding:"4px",marginBottom:"3%"}} onClick={this.Kg_Meters_Units}>Kg-Meters-Units</button>
            <button style={{padding:"4px",marginBottom:"3%"}} onClick={this.Pound_Inches_Units}>Pound-Inches-Units </button>
            <div style={{marginBottom:"2%"}}>
              <label style={{ marginRight: "2rem" }}>Height:</label>
              <input type="text" placeholder="height in centi-meter" onChange={this.Height_Handler}/>
            </div>
            <div style={{marginBottom:"2%"}}>
              <label style={{ marginRight: "1.8rem" }}>Weight:</label>
              <input type="text" placeholder="Weight in kg" onChange={this.Weight_Handler}/>
            </div>
            <button onClick={this.Calculate_Bmi}>Calculate</button>
            <h3>{this.state.weight_status}</h3>
            <img src={this.state.image} alt="marvel"></img>
          </div>
        </div>
      );
    }

    else{
      return (
        <div style={{}}>
          <div style={{ width: "50%", margin: "auto",border:"1px solid black",textAlign:"center",backgroundColor:"grey" }}>
            <h3>MEASURE YOUR BMI</h3>
            <button style={{padding:"4px",marginBottom:"3%"}} onClick={this.Kg_Meters_Units}>Kg-Meters-Units</button>
            <button style={{padding:"4px",marginBottom:"3%"}} onClick={this.Pound_Inches_Units}>Pound-Inches-Units </button>
            <div style={{marginBottom:"2%"}}>
              <label style={{ marginRight: "2rem" }}>Height:</label>
              <input type="text" placeholder="height in inches" onChange={this.Height_Handler}/>
            </div>
            <div style={{marginBottom:"2%"}}>
              <label style={{ marginRight: "1.8rem" }}>Weight:</label>
              <input type="text" placeholder="Weight in Pounds" onChange={this.Weight_Handler}/>
            </div>
            <button onClick={this.Calculate_Bmi}>Calculate</button>
            <h3>{this.state.weight_status}</h3>
            <img src={this.state.image} alt="marvel"></img>
          </div>
        </div>
      );
    }
    
  }
}
