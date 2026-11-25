
import {MainContext} from "./globalcontext"

export default function MainContextprovider({children}){

    const homedetails={
        Home:"Welcome to home page",
        Message:"Welcome to about page",
        ContactPerson:"Karthick"
        }
        
    return (
      <>
        <MainContext.Provider value={homedetails}>
          {children}
        </MainContext.Provider>
      </>
    );
}