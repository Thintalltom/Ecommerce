import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
export const cartContext = createContext({} as any);

export const CartProvider = ({ children }: any) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
      });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
         
    };
    const [products, setProducts] = useState([]);
    const getProduct = async () => {
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products"
          );
          setProducts(response.data);
         
         
        } catch (error) {
          console.error("Error fetching products:", error);
          return [];
        }
      }
      useEffect(() => {
        getProduct();
      }, [])
      
    return (
        <cartContext.Provider value={{ handleInputChange, formData, products }}>
            {children}
        </cartContext.Provider>
    );
}

export const cartContextHook = () => {
    return useContext(cartContext);
}
