import { Component } from "react"
export default class ClassComponent extends Component{
    constructor(){
        super()
        this.state={
            name:"Reshma",
            trainee:"FullStack Trainee"
        }
    }
    render(){
        return(
            <>
            <div className="h3 text-primary text-center mt-3">Class Component</div>
            <div className="mt-3">
                <div className="p ms-3 border"><b>Name :</b>{this.state.name}</div>
                <div className="p ms-3 mt-3 border"><b>Trainee :</b>{this.state.trainee}</div>
            </div>
            </>
        )
    }
}