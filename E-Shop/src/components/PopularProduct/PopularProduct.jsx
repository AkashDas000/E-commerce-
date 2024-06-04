import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const PopularProduct = ({AddToCart}) => {

    
    const [popularProduct, setpopularProduct] = useState([])

    useEffect(() => {

        const PopularProductFetch = async () => {
          try{
            const res = await axios('https://dummyjson.com/carts/1');
            setpopularProduct(res.data.products);
            console.log(res)
          }catch(err){
            toast.error(err.message)
          }
        };
    
        PopularProductFetch();
      }, []);



  return (
    <>
    <div className=' mt-10 text-center'>
        <h2 className=' text-5xl font-semibold underline'>Popular Product</h2>
    </div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
        {
            popularProduct.filter((item, index) => index !== 1)
            .map((popularItem)=>(
<div className="lg:w-1/4 md:w-1/2 p-4 w-full " key={popularItem.id}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={popularItem.thumbnail}/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">{popularItem.title}r</h2>
          <p className="mt-1 font-bold text-2xl">$ {popularItem.price}</p>
        </div>
        <button className=" ml-auto text-white bg-indigo-500 border-0 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4"
        onClick={()=>AddToCart(popularItem)}>Add to cart</button>
      </div>
            ))
        }
      
      </div>   
  </div>
</section>
    </>
  )
}

export default PopularProduct