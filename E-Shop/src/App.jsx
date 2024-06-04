import "./App.css";
import React, { useEffect, useState } from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseAuth/firebaseAuth";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  // Add to cart
  const [cart, setCart] = useState([]);
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [invalid, setinvalid] = useState("Invalid PROMOCODE");
  const [username, SetUsername] = useState("");

  const AddToCart = (product) => {
    const isproductExsits = cart.find((findItem) => findItem.id === product.id);

    if (isproductExsits) {
      const upDateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCart(upDateCart);
      
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product Added to Cart");
    }
  };

  // Add to cart

  const handleInc = (id) => {
    const Add = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(Add);
  };
  const handleDec = (id) => {
    const Sub = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(Sub);
  };

  // remove from cart

  const handlRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id);
    setCart(updateByFilter);
  };

  // calculate total price

  const getTotal = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);

    return totalPrice - discount;
  };

  // PromoCode

  const applypromocode = () => {
    if (promocode === "Discount10") {
      setDiscount(getTotal() * 0.1);
      setPromocode();
    } else {
      setinvalid(invalid);
    }
  };

  // username display

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUsername(user.displayName);
      } else {
        SetUsername("");
      }
    });
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} username={username} />
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart}/>} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleInc={handleInc}
                  handleDec={handleDec}
                  handlRemove={handlRemove}
                  getTotal={getTotal}
                  applypromocode={applypromocode}
                  promocode={promocode}
                  setPromocode={setPromocode}
                  invalid={invalid}
                />
              }
            />
            <Route
              path="/allproducts"
              element={<AllProducts AddToCart={AddToCart} />}
            />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/singleproduct/:id"
              element={<SingleProduct AddToCart={AddToCart} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
