import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Hero() {
  return (
    <section className=" bg-main py-[2rem] sm:py-[8rem]">
      <div className=" container-wrapper">
        <div className=" flex flex-col justify-center items-center pt-0 sm:pt-[1rem]">

            <h1 className=" asul-bold text-xl sm:text-3xl font-semibold py-4">
            Laugh, stake, and collect rewards with Baby Trump on Solana!
            </h1>
          <img
            src="images/logo.png"
            alt=""
            className=" rounded-full h-[350px] mb-4"
          />

          <div className="bg-[#ab3435] rounded-full py-2 px-4 my-3">
            <a href="  https://solscan.io/token/7z9CYQFYBTXEZ4Tv6MhDAWvoeCbzSEAacd5Mc2bEU6kf" target="_blank" className="asul-bold text-xs sm:text-2xl">
            7z9CYQFYBTXEZ4Tv6MhDAWvoeCbzSEAacd5Mc2bEU6kf
            </a>
          </div>

          <div className="flex justify-center gap-4 items-center">
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/7LVjXsZbMzEBkNj6BCRgp2LdSnRt3yavubmvgmvVJGtL?t=1710660493220" target="_blank" className="bg-[#ab3435] rounded-full text-lg sm:text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black">
                Dex Tool
            </a>


            <div className=" flex justify-center gap-4 items-center">
            <a href="https://t.me/babytrumpso" target="_blank" className=" text-5xl ">
              <FaTelegram />
            </a>

            <a href="https://twitter.com/BabyTrumphh" target="_blank" className=" text-5xl">
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
