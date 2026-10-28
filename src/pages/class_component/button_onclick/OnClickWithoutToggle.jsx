import { Component } from "react";

export default class OnclickWithouttoggle extends Component{
    constructor(){
        super()
        this.state={
            name:"Reshma",
            age:22
        }
    }

        Ondetails=()=>{
            this.setState(
            {
             ...this.state,
             name:"Lavanya",
             age:32
            }
        )}
    
    render(){
        return(
            <>
            <div className="h2 text-center text-primary">Change Detail</div>
            
            <div className="m-3">
                <div className="p mt-2">
                    <span> Name: </span>
                    <span>{this.state.name}</span>
                </div>

                <div className="p mt-2">
                    <span> age: </span>
                    <span>{this.state.age}</span>
                </div>

                <div>
                    <button className="btn btn-primary mt-2" onClick={this.Ondetails}>Change Details</button>
                </div>
            </div>

            </>
        )
    }
}