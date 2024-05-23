import "../../CSS/Footer.css"
import im1 from "../assets/Vector/Icon.png"
import im2 from "../assets/Vector/Icon2.png"
import im3 from "../assets/Vector/Icon3.png"
import icon1 from "../assets/Vector/l1.png"
import icon2 from "../assets/Vector/l2.png"
import icon3 from "../assets/Vector/l3.png"
import icon4 from "../assets/Vector/l4.png"
import icon5 from "../assets/Vector/l5.png"
import icon6 from "../assets/Vector/l6.png"
import icon7 from "../assets/Vector/l7.png"


export default function Footer() {
  return (
    <div id="Footer-item" className="Footer-content flex flex-col justify-center items-center gap-14 flex-wrap pt-9">
        <div className="flex  justify-center items-center gap-32 flex-wrap">
            <div className="flex flex-col gap-12 Footer-contact">
                <div>
                <h1 className="text-2xl">Contacts..</h1>
                <h2 className="text-3xl">Address Info</h2>
                </div>
                <div className="flex gap-4">
                    <img className="w-12 h-12" src={im1} />
                    <div>
                        <h2>Email</h2>
                        <p>free@psdfreebies.com</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <img className="w-12 h-12" src={im2} />
                    <div>
                        <h2>Call Us!</h2>
                        <p>+123 456 7890</p>
                        <p>+123 456 7890</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <img className="w-12 h-12" src={im3} />
                    <div>
                        <h2>Address</h2>
                        <p>123, Main Road,New City</p>
                        <p>My Country 123456</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className=" text-3xl ">Get in Touch</h2>
                <form className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex gap-3 items-center justify-center"><label className="text-white">Name</label><input type="text" required placeholder="Enter Your name" name="name"></input></div>
                    <div className="flex gap-3 items-center justify-center"><label className="text-white">Email</label><input type="email" required placeholder="Enter Your Email id" name="email"></input></div>
                    <div className="flex gap-3 items-center justify-center"><label className="text-white">Phone</label><input type="tel" required placeholder="Enter Your Mobile number" name="phone"></input></div>
                    <div className="flex gap-1 items-center justify-center"><label className="text-white">Message</label><textarea  required placeholder="Any Message" name="message"></textarea></div>
                    <button className="bg-blue-500 ml-9 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">Submit</button>
                </form>
            </div>
            
        </div>
        <div className="flex flex-col gap-9 items-center justify-center">
            <div className="flex gap-9 Footer-images">
            <a src="https://www.facebook.com/"><img  className="icons" src={icon1} /></a>
            <a src="https://www.google.com/"><img className="icons" src={icon2} /></a> 
            <a src="https://www.facebook.com/"><img className="icons" src={icon3} /></a> 
            <a src="https://www.youtube.com/"><img  className="icons" src={icon4} /></a>
            <a src="https://www.linkedin.com/feed/"><img  className="icons" src={icon5} /></a>
            <a src="https://www.facebook.com/"><img  className="icons" src={icon6} /></a>
            <a src="https://www.facebook.com/"><img  className="icons" src={icon7} /></a>
            </div>
                <div className="flex flex-col justify-center items-center gap-1 pb-7">
                    <p>Designed By PSDFreebies.com</p>
                    <h3 className="text-white text-2xl">COPYRIGHT 2024</h3>
                </div>
        </div>
    </div>
  )
}

































































































































