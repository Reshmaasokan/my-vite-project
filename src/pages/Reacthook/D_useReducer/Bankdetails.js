
export const reducerfn=(state,action)=>{

    switch (action.type){
        case "display":{
            console.log("Entered Display status")
                const details = {
                  Name: "Reshma",
                  Age: 22,
                  Balance: 30000,
                };
            return details
        }
        default:{
            return state
        }

    }
}