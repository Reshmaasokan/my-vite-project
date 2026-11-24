import useProduct from "./Hook/Useproduct"

export default function Product(){
    const product=useProduct()
    
    return(
        <>{product.map((value,index)=>(
            <div key={index}>
                <span>{value.id}.</span>
                <span> {value.title}</span>
            </div>
        )
        )}

        </>
    )
}