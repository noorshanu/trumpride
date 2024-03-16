import React from 'react'

function Navbar() {
  return (
   <section className=' py-1 bg-[#ab3435]'>

    <nav className=' flex justify-between container-wrapper items-center'>
        <div className=' flex items-center gap-1'>
           <img src="images/logo2.png" alt=""  className=' h-[80px]'/>
           <h2 className='asul-bold text-3xl' >BabyTrump</h2>

        </div>


<div>
<a href="/" target="_blank" className="bg-[#344cab] rounded-full text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black">
               Buy Now
            </a>
</div>
    </nav>

   </section>
  )
}

export default Navbar