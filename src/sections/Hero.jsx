import React from 'react'

function Hero() {
  return (
    <section className=' bg-main h-[100vh]'>
        <div className=' container-wrapper'>
            <div className=' flex flex-col justify-center items-center'>

                <img src="images/logo.png" alt="" className=' rounded-full h-[350px]' />
               

               <div className='bg-[#ab3435] rounded-full py-2 px-4 my-3'>
                <h2 className='asul-bold text-2xl'>
                0xD3e18a5c295590dEaAA98720ac8cB38Af79c0a12
                </h2>

               </div>
            </div>

        </div>
    </section>
  )
}

export default Hero