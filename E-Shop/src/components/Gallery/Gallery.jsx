import React from "react";
import g1 from "../../assets/g1.jpeg"
import g2 from "../../assets/g2.jpeg"
import g3 from "../../assets/g3.jpg"
import g4 from "../../assets/g4.jpeg"
import g5 from "../../assets/g5.jpg"
import g6 from "../../assets/g6.jpg"

const Gallery = () => {
  return (
    <>
    <div className=' mt-10 text-center'>
        <h2 className=' text-5xl font-semibold underline'>Gallery</h2>
    </div>
      <section className ="text-gray-600 body-font">
        <div className ="container px-5 py-24 mx-auto flex flex-wrap">
          <div className ="flex flex-wrap md:-m-2 -m-1">
            <div className ="flex flex-wrap w-1/2">
              <div className ="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className ="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500"
                  src={g1}
                />
              </div>
              <div className ="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className ="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500"
                  src={g2}
                />
              </div>
              <div className ="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className ="w-full h-full object-cover object-center block hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500"
                  src={g6}
                />
              </div>
            </div>
            <div className ="flex flex-wrap w-1/2">
              <div className ="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className ="w-full h-full object-cover object-center block hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500"
                  src={g4}
                />
              </div>
              <div className ="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className ="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition duration-500"
                  src={g5}
                />
              </div>
              <div className ="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className ="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition duration-500"
                  src={g3}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
