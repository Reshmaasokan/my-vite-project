import { useEffect, useState } from "react"
import DisplayCrackers from "../Crackers/components/DisplayCrackers"
/*import AddCrackers from "../Crackers/components/AddCrackers"
import DeleteCrackers from "../Crackers/components/DeleteCrackers"
import UpdateCrackers from "../Crackers/components/UpdateCrackers"*/
import crackerinfo from "../Crackers/CrackersDetails/crackers.json"
export default function CrackersMainPage(){

    const [cracker,setCracker]=useState(crackerinfo)

    console.log("crackers:::::>",cracker)

    return (
      <>
        <DisplayCrackers cracker={cracker} />
      </>
    );
}