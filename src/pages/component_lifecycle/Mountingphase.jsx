import { Component } from "react"
export default class Mountingphase extends Component{
    constructor(){
        super()
        console.log("This is a constructor")
        this.state={
             person:{
                name:"Asokan",
                age:54
             },
             address:{
                temp:"Nagercoil",
                permanent:"Balaramapuram"
             }
        }
    }

    componentDidMount(){
        console.log("This is the mounting phase")
        setTimeout(()=>
        {
            this.setState(
            {
                person:{
                ...this.state.person,
                name:"Asokan Subramaniyam"
                },
                address:{
                ...this.state.address,
                temp:"Nagercoil-3"
                }
            }
            )

        },500)
        
    }
    render(){
        console.log("THis render function")
        return(
        <>
        <div>
            <div className="h4 text-center text-primary fw-bold">Person details in mounting phase</div>
            <div className="h6 fw-bold">Person detail</div>
            <div>
                <span>Person name :</span>
                <span>{this.state.person.name}</span>
            </div>
            <div>
                <span>Person age :</span>
                <span>{this.state.person.age}</span>
            </div>
            <div>
                <span>Person temporary address :</span>
                <span>{this.state.address.temp}</span>
            </div>
            <div>
                <span>Person permanent address :</span>
                <span>{this.state.address.permanent}</span>
            </div>
        </div>
        </>
        )
    }
}