import React from "react";

function Aboutus() {
  return (
    <section className=" py-4">
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center gap-2 flex-col sm:flex-row">
          <div className=" w-full">
            <img src="images/about.png" alt="" className=" h-[490px] rounded-xl" />
          </div>

          <div className=" max-w-2xl">
            <h1 className=" asul-bold text-4xl py-4">About us</h1>

            <p className=" text-lg py-2">
              Welcome to TrumpBull, where cryptocurrency meets the spirit of the
              presidency! We're a community-driven crypto meme project inspired
              by the iconic figure of President Donald Trump.
            </p>

            <p className=" text-lg py-2">
              Our mission is to infuse humor, creativity, and a touch of
              political satire into the world of cryptocurrencies.
            </p>

            <p className=" text-lg py-2">
              At TrumpBull, we believe in the power of memes to bring people
              together, spark conversations, and foster a sense of camaraderie
              within the crypto community. Our platform celebrates the
              intersection of technology, finance, and pop culture, offering a
              unique blend of entertainment and innovation.
            </p>

            <p className=" text-lg py-2">
              Join us on our journey to make crypto great again! Whether you're
              a seasoned investor, a blockchain enthusiast, or simply someone
              who enjoys a good laugh, there's a place for you in the TrumpBull
              movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
