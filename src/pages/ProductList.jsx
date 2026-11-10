import { useEffect, useState } from "react";
import { fetchApicall } from "../service/fetchapicall";
export default function ProductList() {
  const [display, setDisplay] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(1);
  const item = "product";

  useEffect(() => {

    const controller =new AbortController()
    fetchApicall(`${item}/${currentProduct}`, "get",{},controller)
      .then((data) => setDisplay(data))
      .catch((error) => console.error(error))

      return(()=>{
        controller.abort()
      })


  }, [currentProduct]);


  return (
    <>
      <div className="container">
        
            <div className="h1 text-center">Product</div>

            <div>{JSON.stringify(display)}</div>

            <div className="d-flex gap-3 mt-2">

                <div className="btn btn-primary" onClick={()=>{setCurrentProduct(currentProduct + 1)}}>
                    Next {item}
                </div>
        
                {/* <div className="btn btn-primary" onClick={()=>{setCurrentProduct(currentProduct - 1)}}>
                    Previous {item}
                </div> */}

            </div>

      </div>
    </>
  );
}
