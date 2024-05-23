import "../../CSS/Navbar.css"
import Side from "../assets/Vector/menu.png"

export default function Navbar({flag,setFlag}) {
  return (
    <div className="flex justify-around pt-6 items-center nav">
        <img onClick={() => setFlag(!flag)} className="w-8 h-8 side-bar z-[3]"src={Side} />
        <div className="Heading"><span className="span-content">!st</span> Agency</div>
        <div className="flex gap-5 navbar-options">
            <a href="#Home"><p className="hover:text-[16px] hover:text-blue-500 cursor-pointer">HOME</p></a>
            <a href="#WHOWEARE"><p className="hover:text-[16px] hover:text-blue-500 cursor-pointer">ABOUT US</p></a>
            <a href="#Blog"><p className="hover:text-[16px] hover:text-blue-500 cursor-pointer">BLOG</p></a>
            <a href="#services"><p className="hover:text-[16px] hover:text-blue-500 cursor-pointer">SERVICES</p></a>
            <a href="#profile"><p className="hover:text-[16px] hover:text-blue-500 cursor-pointer">PAGES</p></a>
            <a href="#Footer-item"><p className="hover:text-[16px] hover:text-blue-500 cursor-pointer">CONTACT US</p></a>
        </div>
    </div>
  )
}
