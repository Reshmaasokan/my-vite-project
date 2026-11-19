import { useEffect, useState } from "react"
import {Button, Card} from "react-bootstrap"
import {useLocation} from "react-router-dom"
import { fetchApiCall } from "../../Service/Apicall"
export default function Product(){
    const location=useLocation()
    const [product,setProduct]=useState([])

    useEffect(()=>{
        if(location.search!=""){
            const queryParams=new URLSearchParams(location.search)
            const id=queryParams.get("id")
        

            fetchApiCall(`product/${id}`,"get")
              .then((data)=>setProduct(data))
              .catch((error)=>console.log(error))
        }
    },[location.search])
    return (
      <>
        <div className="h1 text-center">Product Page</div>
        <div className="container d-flex justify-content-center mt-4 ">
              <Card style={{ width: "18rem" }}>
                <Card.Title>Product Title:{product.title}</Card.Title>
                <Card.Body>
                  <Card.Img variant="top" src={product.image}/>
                  <Card.Text className="fw-bold">Product Description:{product.description}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
        
           </div>
      </>
    );
}