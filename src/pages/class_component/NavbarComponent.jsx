import { Component } from "react"
export default class NavbarComponent extends Component{
render(){
    return(
        <>
        <div className="navbar navbar-expand-lg navbar-dark bg-primary d-flex">
                
            <div className="navbar-brand">My Website</div>
                  <div className="navbar-nav className ms-auto">
                    <li className="nav-item nav-link">Home</li>
                    <li className="nav-item nav-link">About</li>
                    <li className="nav-item nav-link">Contact</li>
            </div>

        </div>
        </>
    )
}

}