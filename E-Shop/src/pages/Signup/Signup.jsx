import React, { useState } from "react";

import signup from "../../assets/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/firebaseAuth";
import toast from "react-hot-toast";

const Signup = () => {
  const mystle = {
    backgroundImage: `url(${signup})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const navigateLogin = useNavigate();

  const [userSignup, setUsersignup] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    
    setUsersignup({ ...userSignup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password)
      .then(async(res)=>{
        const user = res.user
       await updateProfile(user,{
          displayName: userSignup.username
        });

        navigateLogin("/login")
      
      })
      .catch((err)=> toast(err.message))
  };

  return (
    <>
      <div>
        <div>
          <div
            style={mystle}
            className=" h-screen w-screen flex justify-center items-center "
          >
            <div className=" grid gap-2">
              <div className="bg-gradient-to-r from-white-400 rounded-[26px] ">
                <div className=" border-[20px] border-transparent rounded-[20px] bg-transparent shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
                  <h1 className=" pt-8 pb-6 font-bold text-5xl text-center cursor-default">
                    Sign Up
                  </h1>
                  <form action="#" method="post" className=" space-y-2">
                    <div>
                      <label
                        htmlFor="text"
                        className=" mb-2 text-black font-semibold text-lg"
                      >
                        Name
                      </label>
                      <input
                        className=" border p-3 dark:bg-grey-700 dark:text-black-300  dark:border-black-700 shadow-md name:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        autoComplete="off"
                        type="text"
                        name="username"
                        required
                        value={userSignup.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className=" mb-2 text-black font-semibold text-lg"
                      >
                        Email
                      </label>
                      <input
                        autoComplete="off"
                        className=" border p-3 dark:bg-grey-700 dark:text-black-300  dark:border-black-700 shadow-md name:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="email"
                        name="email"
                        required
                        value={userSignup.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className=" mb-2 text-black font-semibold text-lg"
                      >
                        Password
                      </label>
                      <input
                        autoComplete="off"
                        className=" border p-3 shadow-md dark:bg-grey-700 dark:black-300  dark:border-gray-700 name:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        type="password"
                        name="password"
                        required
                        value={userSignup.password}
                        onChange={handleChange}
                      />
                    </div>
                    <a
                      className=" group text-blue-700 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className=" bg-left-bottom bg-gradient-to-r text-sm from-blue-900 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Forget your password?
                      </span>
                    </a>
                    <button
                      className=" bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      SIGN IN
                    </button>
                  </form>
                  <div className=" flex flex-col mt-4 items-center justify-center text-sm">
                    <h3 className="text-black font-semibold">
                      Already have an account?
                      <Link to="/login">
                        <span className=" text-red-600 font-bold">Login</span>
                      </Link>
                    </h3>
                  </div>

                  <div
                    id="third-party-auth"
                    className=" flex items-center justify-center mt-5 flex-wrap"
                  >
                    <button
                      href="#"
                      className=" hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        className=" max-w-[25px]"
                        src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                        alt="Google"
                      />
                    </button>
                    <button
                      href="#"
                      className=" hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        className=" max-w-[25px]"
                        src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                        alt="Linkedin"
                      />
                    </button>
                    <button
                      href="#"
                      className=" hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        className=" max-w-[25px] filter dark:invert"
                        src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                        alt="Github"
                      />
                    </button>
                    <button
                      href="#"
                      className=" hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        className=" max-w-[25px]"
                        src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                        alt="Facebook"
                      />
                    </button>
                    <button
                      href="#"
                      className=" hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        className=" max-w-[25px] dark:gray-100"
                        src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                        alt="twitter"
                      />
                    </button>

                    <button
                      href="#"
                      className=" hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        className=" max-w-[25px]"
                        src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                        alt="apple"
                      />
                    </button>
                  </div>

                  <div className=" text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                    <p className=" cursor-default">
                      By signing in, you agree to our
                      <a
                        className=" group text-blue-500 transition-all duration-100 ease-in-out"
                        href="#"
                      >
                        <span className=" cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Terms
                        </span>
                      </a>
                      and
                      <a
                        className=" group text-blue-500 transition-all duration-100 ease-in-out"
                        href="#"
                      >
                        <span className=" cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Privacy Policy
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
