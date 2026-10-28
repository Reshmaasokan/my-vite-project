import { Component } from "react";
export default class Calculator extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    render(){
        return (
            <>
                <div className="text-primary text-center ">Simple Calculator</div>
                <div className="h3">Count:{this.state.count}</div>
                <div className="btn-group">
                    <button onClick={()=>{this.setState({count:this.state.count+1})}}>Add</button>
                    <button onClick={()=>{this.setState({count:this.state.count-1})}}>Sub</button>
                    <button onClick={()=>{this.setState({count:this.state.count*2})}}>Mul</button>
                    <button onClick={()=>{this.setState({count:this.state.count/2})}}>Div</button>
                    <button onClick={()=>{this.setState({count:0})}}>Reset</button>
                </div>
            </>
        )
    }
}