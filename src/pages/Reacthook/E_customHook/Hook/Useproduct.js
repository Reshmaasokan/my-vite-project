import { useState, useEffect } from "react";
import { fetchapi } from "../Service/service.call";
export default function useProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchapi("product", "get")
      .then((response) => {
        console.log("API response:", response);
        setProduct(response);
      })
      .catch((error) => console.log("Error:::>", error));
  }, []);
  return product;
}
