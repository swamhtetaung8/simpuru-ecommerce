import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/counterSlice";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [oriproducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userCategory, setUserCategory] = useState("");
  const [allTab, setAllTab] = useState(true);
  const [menTab, setMenTab] = useState(false);
  const [womenTab, setWomenTab] = useState(false);
  const [electronicTab, setElectronicTab] = useState(false);
  const [jewelriesTab, setjewelriesTab] = useState(false);

  const fetchProducts = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    const newProducts = data.map((item) => {
      item = { ...item, quantity: 1, originalPrice: item.price, added: false };
      return item;
    });
    setProducts(newProducts);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch(getProducts(oriproducts));
  }, [oriproducts]);

  const data = {
    oriproducts,
    setProducts,
    loading,
    userCategory,
    setUserCategory,
    allTab,
    setAllTab,
    menTab,
    setMenTab,
    womenTab,
    setWomenTab,
    electronicTab,
    setElectronicTab,
    jewelriesTab,
    setjewelriesTab,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useCustom = () => useContext(StateContext);
