import { Component } from "react"
export default class UpdatingPhase extends Component{
    constructor(){
        super()
        this.state={
            Name:"Reshma",
            age:13,
            message:"Voter is not eligible to vote"
        }
    }
    componentDidUpdate(prevProps,prevState){
            if(prevState.age!=this.state.age && this.state.age>=18){
                this.setState({message:"Voter is eligible for vote"})
            }
    }
    render(){
      return(
        <>
        <div className="h3 text-success text-center fw-bold">Voter Details</div>
        <div>
            <span>
                <div className="p">Name: {this.state.Name}</div>
            </span>
            <span>
                Age: {this.state.age}
                <button onClick={()=>{this.setState({age:this.state.age+1})}}>Add</button>
            </span>
            <span>
                <div className="p">Message: {this.state.message}</div>
            </span>
        </div>
        </>
      )
    }
    
}