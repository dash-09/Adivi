import React from "react";
/* import Typed from 'react-typed'; */

const Hero = () => {
  return (
    <div className="text-white " id="home" >
      <div className="max-w-[800px] mt-[0px] w-full h-screen mx-auto text-center flex flex-col justify-center " >
        <p className=" text-[#7c56e6] font-bold p-2 capitalize">
          Hi there, I am Adarsh and 
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-5xl font-bold md:py-4 font-josefin uppercase">
          And You r doing Grt
        </h1>
        {/* <div>
          <p className=" md:text-4xl sm:text-2.5xl text-xl font-bold py-3">
            Art, Charismatic, Amazing
          </p>
        </div> */}
        <p className="md:xl text-xl font-bold text-gray-500 capitalize font-poppins">
          Our Imperfections are our beauty, it tells us who we are and what we
          can be . So [
          <span style={{ color: "white" }} className="font-josefin uppercase">
            Embrace
          </span>
          ] It.
        </p>
        <a
          className=" bg-[#7c56e6] w-[200px] rounded-md my-6 mx-auto py-3 font-semibold hover:bg-[#322075] font-josefin uppercase "
          href="#Posts"
        >
          Read Blogs
        </a>
      </div>
    </div>
  );
};

export default Hero;
