import "../../CSS/Blog.css"

export default function Blog() {
  return (
  
    <div id="Blog" className="Blog-content flex">
        <div className="div container1 flex flex-col gap-3">
           <h1 className="text-black text-2xl">Blog</h1>
           <h2 className="text-black text-2xl">I Write Beautiful Thinks</h2>
           <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem cumque 
            consectetur inventore odio quae minus numquam quasi reprehenderit libero sapiente.
           </p>
        </div>

        <div className="div container2 flex flex-col justify-around items-center">

               <h3 className="text-white">11 November</h3>
               <div className="flex flex-col justify-center items-center">
               <h2 className="text-3xl">Lorem ipsum dolor</h2>
               <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam 
                facilis repudiandae mollitia, porro labore laborum facere illum nulla dolor!
               </p>
               </div>
        </div>
        
        <div className="div container3 flex flex-col gap-5 items-center justify-center p-5 text-white">
         <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus 
            consequatur illo quas!numquam quasi reprehenderit libero 
         </h3>
         <h3>11 November</h3>
        </div>
        <div className="div container4 flex flex-col gap-3 justify-center items-center text-black">
            <h2 className="text-black">11 November</h2>
            <h2 className="text-3xl text-black">Lorem ipsum dolor</h2>
        </div>

        <div className="div container5 flex flex-col gap-3 justify-center items-center text-black">
        <h2 className="text-white">11 November</h2>
        <h2 className="text-3xl text-white">Lorem ipsum dolor</h2>
        </div>

        <div className="div container6 flex flex-col justify-around items-center">
               <h3 className="text-white">11 November</h3>
               
               <h2 className="text-3xl">Lorem ipsum dolor</h2>
               <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laboriosam 
                facilis repudiandae mollitia, porro labore laborum facere illum nulla dolor!
               </p>
        </div>

    </div>
    
  )
}
