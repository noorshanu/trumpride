import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Hero() {
  return (
    <section className=" bg-main py-[8rem]">
      <div className=" container-wrapper">
        <div className=" flex flex-col justify-center items-center pt-[1rem]">

            <h1 className=" asul-bold text-3xl font-semibold py-4">
            Welcome to the world of BabyTrump on Solana!
            </h1>
          <img
            src="images/logo.png"
            alt=""
            className=" rounded-full h-[350px] mb-4"
          />

          <div className="bg-[#ab3435] rounded-full py-2 px-4 my-3">
            <h2 className="asul-bold text-2xl">
              0xD3e18a5c295590dEaAA98720ac8cB38Af79c0a12
            </h2>
          </div>

          <div className="flex justify-center gap-4 items-center">
            <a href="/" target="_blank" className="bg-[#ab3435] rounded-full text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black">
                Dex Tool
            </a>


            <div className=" flex justify-center gap-4 items-center">
            <a href="/" className=" text-5xl ">
              <FaTelegram />
            </a>

            <a href="/" className=" text-5xl">
              <FaSquareXTwitter />
            </a>
          </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default Hero;
