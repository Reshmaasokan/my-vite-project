import { Component } from "react";

export default class OnclickWithToggle extends Component{
    constructor(){
        super()
        this.state={
            login:false
        }
    }
    display=()=>{
        this.setState({
            login: !this.state.login
        })
    }
    
    render(){
        return(
            <>
            <div className="h1 fw-bold text-primary text-center">Main Page</div>
            <div className="text-center mt-6">
                <div className="fw-bold text-success">{this.state.login && "Welcome User!!!!"}</div>
                <div>
                <button className="btn btn-success" onClick={this.display}>{this.state.login?"Logout":"Login"}</button>
                </div>
            </div>
               
            </>
        )
    }
}