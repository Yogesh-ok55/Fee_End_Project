import "../../CSS/Client.css"
import image1 from "../assets/Vector/Layer 83.png"
import image2 from "../assets/Vector/Layer 84.png"
import image3 from "../assets/Vector/Layer 85.png"
import image4 from "../assets/Vector/Layer 86.png"

export default function Client() {
  return (
    <div className="Client-backg flex flex-col pt-5 md:justify-center items-center gap-9">
        <h1 className="text-2xl">Client</h1>
        <h2 className="text-2xl">What I DO..</h2>
        <p className="w-[400px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, hic 
            facere voluptatem veniam eveniet fuga.
        </p>
        <div className="flex gap-[10vw] flex-wrap items-center justify-center">
           <img className="w-40" src={image2} />
           <img className="w-40" src={image1}  />
           <img className="w-40" src={image4} />
           <img className="w-40" src={image3} />
        </div>
    </div>
  )
}
