import React from "react";
import banner from "../../assets/banner.png";

const Herosection = () => {
  return (
    <>
      <div className=" relative  mt-[72px]">
        <div>
          <img
            src={banner}
            alt=""
            className=" w-full object-cover object-center"
          />
        </div>

        <div className=" absolute top-[40%] w-full text-end right-5">
          <h1 className=" text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[red]">
            DIscover Your Next Adventure!
          </h1>
          <p className=" text-[15px] lg:text=2xl mt-2 lg:mt-5 font-semibold">
            Shop Our Latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </>
  );
};

export default Herosection;
