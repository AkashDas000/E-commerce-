import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { auth } from "../../FirebaseAuth/firebaseAuth";
import toast from "react-hot-toast";

const Navbar = ({cart, username}) => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleChange = () => {
    isOpen === false ? setIsopen(true) : setIsopen(false);
  };



const handlelogout = () => {
  
auth.signOut(auth).then(() => {
  toast.success("Log-out successful.");
}).catch((error) => {
  toast.error(error);
});
}


  return (
    <>
      <div>
        <header className=" bg-white border-b border-gray-200 fixed top-0 z-10 w-full">
          <div className=" container mx-auto flex justify-between p-5 items-center">
            <Link to="/">
            <div>
              <h3 className=" font-bold text-2xl">
                E-<span className=" text-red-500">Shop</span>
              </h3>
            </div>
            </Link>
            

            <div className=" hidden md:block ">
              <ul className=" flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className=" mr-5 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/allproducts">
                  <li className=" mr-5 hover:text-gray-900 cursor-pointer">
                    All Product
                  </li>
                </Link>
                <Link to="/about">
                  <li className=" mr-5 hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                  </Link>
                  
                  <Link to="/contact">
                  <li className=" mr-5 hover:text-gray-900 cursor-pointer">
                    Contact
                  </li>
                  </Link>
              </ul>
            </div>

            {isOpen ? (
              <div className="  ">
                <ul className=" flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-semibold">
                  <Link to="/" onClick={ToggleChange}>
                    <li className=" mt-5 hover:text-gray-900 cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link to="/allproducts" onClick={ToggleChange}>
                  <li className=" mt-5 hover:text-gray-900 cursor-pointer">
                    All Product
                  </li>
                  </Link>
                  
                  <Link to="/about" onClick={ToggleChange}>
                  <li className=" mt-5 hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                  </Link>
                  
                  <Link to="/contact" onClick={ToggleChange}>
                  <li className=" mt-5 hover:text-gray-900 cursor-pointer">
                    Contact
                  </li>
                  </Link>
                  
                </ul>
                <button
                  className=" absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                  onClick={ToggleChange}
                >
                  <RxCross1 size={30} />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className=" flex justify-center items-center gap-3">
              {
                username?(<><Link to="/login">
                <button
                  className="  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded textx-base
                     font-semibold" onClick={handlelogout}>
                  LogOut
                </button>
              </Link>
              <span>{username}</span></>):(<Link to="/login">
              <button
                className="  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded textx-base
                   font-semibold">
                Login
              </button>
            </Link>)
              }
              

              <Link to="/cart">
                <button className="relative">
                <span className=" absolute top-[-5px] bg-[red] right-0 text-white px-1 rounded-full text-xs">{cart.length}</span>
                  <FaShoppingCart size={25}  />
                  
                </button>
              </Link>
              {isOpen ? (
                ""
              ) : (
                <button className="md:hidden" onClick={ToggleChange}>
                  <GiHamburgerMenu size={25} />
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
