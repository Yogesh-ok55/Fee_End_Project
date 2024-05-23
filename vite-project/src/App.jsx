import Navbar from "./components/Navbar"
import "../CSS/HomePage.css"
import "./App.css"
import img1 from "./assets/Vector/upper.png"
import Whoweare from "./pages/Whoweare"
import Services from "./pages/Services"
import Profile from "./pages/Profile"
import Client from "./pages/Client"
import Blog from "./pages/Blog"
import Footer from "./components/Footer"
import { useState } from "react"


export default function App() {
  const [flag,setFlag]=useState(true);
  
  return (
    <div>
      <div className={`${flag ? "hidden" : "block"} ${flag ? "hidden" : "block"} Side  bg-blue-300 opacity-98 flex flex-col ss:hidden items-center justify-between pt-[100px] pb-5`} >
            <a href="#Home"><h2 className="text-black  hover:text-[16px] hover:text-blue-500 cursor-pointer">HOME</h2></a>
            <a href="#WHOWEARE"><h2 className="text-black  hover:text-[16px] hover:text-blue-500 cursor-pointer">ABOUT US</h2></a>
            <a href="#Blog"><h2 className="text-black  hover:text-[16px] hover:text-blue-500 cursor-pointer">BLOG</h2></a>
            <a href="#services"><h2 className="text-black  hover:text-[16px] hover:text-blue-500 cursor-pointer">SERVICES</h2></a>
            <a href="#profile"><h2 className="text-black  hover:text-[16px] hover:text-blue-500 cursor-pointer">PAGES</h2></a>
            <a href="#Footer-item"><h2 className="text-black  hover:text-[16px] hover:text-blue-500 cursor-pointer">CONTACT US</h2></a>
      </div>
      <div  id="Home" className="HomePage">
      <Navbar  flag={flag} setFlag={setFlag}/>
      <div className="Home-content flex justify-center">
        <div className="Home-container flex flex-col gap-9">
        <h1 className="text-2xl">Hello</h1>
        <h2 className="text-3xl">My Name is <span>John Doe</span></h2>
        <h4 className="3xl font-bold">Ceo | !st Agency</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto dolore amet 
          rem molestias odio ea nam quasi dignissimos iste! Voluptatum nemo assumenda 
          delectus deleniti laborum quas voluptate explicabo cupiditate iure, doloremque 
          iusto hic ipsa nam aperiam facilis consequuntur nostrum. Mollitia voluptates 
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full home-button">Click here</button>

          </div>
          <div>
            <img className="Person-imag" src={img1} />
          </div>
      </div>
      </div>
       <Whoweare />
      <Services />
      <Profile />
      <Client />
      <Blog />
    <Footer />
    </div>

  )
}
