import React, { useEffect, useState } from "react";

import axios from "axios";
import bg from "../../assets/bg.jpg"
import { Link } from "react-router-dom";


const AllProducts = ({ AddToCart }) => {
  // 'https://dummyjson.com/products/categories'







  const [categories, setcategoires] = useState([]);






  const [originalProducts, setoriginalProducts] = useState([]);

  const [allProducts, setAllproducts] = useState([]);

  const [selectproduct, setselectproduct] = useState("");

  const [searchItem, setSearchItem] = useState("");

  const [minprice, setMinPrice] = useState("")
  const [maxprice, setMaxPrice] = useState("")
  
  // All products
  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllproducts(res.data.products);
      setoriginalProducts(res.data.products);
    };

    AllProducts();
  }, []);

  // Products Categories
  useEffect(() => {
    const getAllProductCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories/");

        setcategoires(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProductCategory();
  }, []);

  const filterproduct = (selectcategory) => {
    setselectproduct(selectcategory);

    const data = selectcategory
      ? originalProducts.filter(
          (filterItem) => filterItem.category === selectcategory
        )
      : originalProducts;
    setAllproducts(data);
  };

  // search products
  const handleSearchbtn = () => {
    const searchProduct = originalProducts.filter((seatchFilterItem) =>
      seatchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    setAllproducts(searchProduct);
  };

  // price filter

  const handlePrice = () => {
    let min = parseFloat(minprice)
    let max = parseFloat(maxprice)
    const filterprice = originalProducts.filter((priceItem)=>(
      (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    ))

    setAllproducts(filterprice)
  }

  return (
    <>
      <>
        <div className=" relative">
          <img
            src={bg}
            alt=""
            className=" object-cover w-full object-center h-[350px] mt-5 "
          />
          <div className=" w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.4]"></div>
          <h2 className=" absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
            All Product
          </h2>
        </div>
        {/* Products Categories Section */}
        <div className=" flex justify-center items-center  ">
          <select
            onChange={(e) => filterproduct(e.target.value)}
            className="border"
          >
            <option>Filter by Product </option>

            {categories
              .slice(0,6).map((item, index) => (
                <option value={[item.AllProducts]} key={index}>
                  {[item.AllProducts]}
                </option>
              ))}
          </select>
        </div>
        {/* Product Search */}
        <div className=" text-center mt-3 text-2xl">
          <input
            placeholder="search item"
            className="border-4 px-2 py-2"
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
          />
          <button
            className=" bg-black text-white px-2 py-2 ml-4 rounded-md"
            onClick={handleSearchbtn}
          >
            Search Product
          </button>
        </div>

        {/* product filter by Price */}

        <div className=" text-center mt-3">
        <input
            placeholder="min price"
            className="border-4 px-2 py-2"
            onChange={(e) => setMinPrice(e.target.value)}
            value={minprice}
          />
          <input
            placeholder="max price"
            className="border-4 px-2 py-2 ml-3"
            onChange={(e) => setMaxPrice(e.target.value)}
            value={maxprice}
          />
          <button
            className=" bg-black text-white px-2 py-2 ml-4 rounded-md"
            onClick={handlePrice}
          >
            Filter by Price
          </button>
        </div>

      

        {/* All products */}
        <section className=" text-gray-600 body-font">
          <div className=" container px-5 py-24 mx-auto">
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {/* map start */}
              {allProducts.map((AllItems) => (
                <div
                  className="w-[90%] px-4 py-4 shodow-lg rounded-md"
                  key={AllItems.id}
                >
                  <Link className="block relative h-48 rounded overflow-hidden" to={`/singleproduct/${AllItems.id}`}>
                    <img
                      src={AllItems.thumbnail}
                      className=" object-cover object-center w-full h-full block rounded-t-lg"
                      alt=""
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className=" ">{AllItems.title}</h3>
                    <h2 className="text-xs tracking-widest title-font mb-1">
                      Rating:- {AllItems.rating}
                    </h2>

                    <p className="text-gray-900 title-font text-lg font-medium">
                      Price:- ${AllItems.price}
                    </p>

                    <button
                      className=" bg-indigo-300 border-3 text-center font-bold rounded-lg px-5 py-2 text-lg mt-1 "
                      onClick={() => AddToCart(AllItems)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default AllProducts;
