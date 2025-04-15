import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
export const cartContext = createContext({} as any);
// interface ProductProps 
// [
// {
//   category: string;
//   description: string;
//   image: string;
//   name: string;
//   price: number;
//   stock: number;
//   __v: number;
//   _id: string;
// }
// ]

export const CartProvider = ({ children }: any) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/product");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  // const getById = async (id: string) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/api/products/${id}`
  //     );
  //     console.log(response.data);
  //     navigate("/products/" + id);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
      
  //   }
  // };

  return (
    <cartContext.Provider value={{ handleInputChange, formData, products }}>
      {children}
    </cartContext.Provider>
  );
};

export const cartContextHook = () => {
  return useContext(cartContext);
};
