import React, {Component} from "react";
import "./Frontdivright.css";
import SelectMonth from "./Selectmonth/Selectmonth";

class Frontdivright extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            name:"",
            month: "January",
            year: "2018",
            credit:"",
            ccv: "",
            saved: false
        }
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputName = this.handleInputName.bind(this);
        this.handleChangeCcv = this.handleChangeCcv.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`You changed the state!
        Month: ${this.state.month} 
        Year: ${this.state.year}  
        Credit: ${this.state.credit}  
        Name: ${this.state.name}  
        CCV: ${this.state.ccv}  
        Info Saved: ${this.state.saved}`);
        
    }

    handleInputChange(event) {
        let c = event.target.value;
            
        if(c.length === 4 || c.length === 11 || c.length === 18  ){
                c = c + " - ";
        };
        
        this.setState ({
                credit: c
        });
    }

    handleInputName(event){
        const name = event.target.value;
        this.setState({
            name: name
        });
    };

    handleChangeMonth(event) {
        this.setState({
           month: event.target.value 
         });
    };

    handleChangeYear(event) {
        this.setState({
             year: event.target.value
        });
    };

    handleChangeCcv (event) {
        this.setState({
            ccv: event.target.value
        });
    };

    handleChangeCheckbox(event){
        this.setState({
            saved: event.target.checked
        });
    };

    render () {
        return (
        <div className="front-div-right">
            <div className="small-visa-image">
            </div>
            <form onSubmit={this.handleSubmit}>
            <div className="name-div">
                <label className="name-label">
                    <b>NAME</b>
                    <br/>
                    <br/>
                    <input className="input-style" type="text" length="100" maxLength="100" value={this.state.name} onChange={this.handleInputName}/> 
                </label>
            </div>
            <div className="card-div">
                <label className="card-label" >
                    <b>CARD NUMBER</b>
                    <br/>
                    <br/>
                    <input className="input-style" type="text" size="25" maxLength="25" value={this.state.credit} onChange={this.handleInputChange}/>
                </label>
            </div>
            <div className="expiration-div">
            <div className="labels-div">
                <label className="expiration-label" htmlFor="select-month">
                    <b>EXPIRES</b>
                </label>
                <label className="ccv-label" htmlFor="for-ccv-input">
                    <b>CCV</b>
                </label>
            </div>
                <span>
                    <SelectMonth 
                        onChange={this.handleChangeMonth}
                        id="select-month"
                    />
                </span>
                <span>
                <label className="year-change-label">
                    <select onChange={this.handleChangeYear}>
                        <option value="2018">
                            2018
                        </option>
                        <option value="2019">
                            2019
                        </option>
                        <option value="2020">
                            2020
                        </option>
                    </select>
                </label>
                </span>
                <span className="ccv-input-span">
                    <input className="ccv-input" id="for-ccv-input" type="text" value={this.state.ccv} onChange={this.handleChangeCcv} length="3" maxLength="3" />
                </span>
            </div>
                <input type="submit" value="BUY NOW" id="submit_button"/>
                <div className="label-div">
                    <input type="checkbox" name="checkbox" id="checkbox_id" value="" checked={this.state.saved} onChange={this.handleChangeCheckbox}/>
                    <span className="checkmark"></span>   
                    <label htmlFor="checkbox_id">Save my information for later</label> 
                </div>
            </form>
        </div>
        )
    }
}

export default Frontdivright;