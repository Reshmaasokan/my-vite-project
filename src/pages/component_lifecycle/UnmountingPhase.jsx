import { Component } from "react";
export default class UnmountingPhase extends Component{
    constructor(){
        super()
        this.state={
            name:"Reshma",
            age:22,
            Designation:"trainee"
        }
    }
    componentWillUnmount(){
        console.log("This is unmounting Phase")
           this.setState({})
    }
    render(){
        return(
            <>
            <div className="h5 text-center text-danger">Person details</div>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Designation: {this.state.Designation}</p>
            </>
        )
    }
} 