import React from "react";
import bg from "../../assets/bg.jpg";
import about from "../../assets/about.webp";
import ino from "../../assets/ino.png"
const About = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={bg}
          alt=""  
          className=" object-cover w-full object-center h-[200px] mt-5"
        />

        <div className=" w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className=" absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          About Us
        </h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Who We Are?
            </h1>
            <p className="mb-8 leading-relaxed">
              The E-Shop Group is one of India’s leading digital commerce
              entities and includes group companies E-Shop, Myntra, E-Shop
              Wholesale, E-Shop Health+, and Cleartrip. Started in 2007,
              E-Shop has enabled millions of sellers, merchants, and small
              businesses to participate in India's digital commerce revolution.
              With a registered customer base of more than 500 million,
              E-Shop's marketplace offers over 150 million products across 80+
              categories. Today, there are over 14 lakh sellers on the platform,
              including Shopsy sellers. With a focus on empowering and
              delighting every Indian by delivering value through technology and
              innovation, E-Shop has created lakhs of jobs in the ecosystem
              while empowering generations of entrepreneurs and MSMEs. E-Shop
              is known for pioneering services such as Cash on Delivery, No Cost
              EMI and easy returns, which are customer-centric innovations that
              have made online shopping more accessible and affordable for
              millions of Indians. In 2024, E-Shop also introduced the
              E-Shop UPI handle to further enhance its digital payment
              offerings for all customers and further India’s digital economy
              vision.
            </p>
            
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              TECHNOLOGY AT E-Shop Group
              <br className="hidden lg:inline-block" />
              INNOVATION
            </h1>
            <p className="mb-8 leading-relaxed">
              E-Shop Group technology drives path-breaking, customer-focused
              innovation that makes high quality products accessible to Indian
              shoppers, besides making the online shopping experience
              convenient, intuitive and seamless.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={ino}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
