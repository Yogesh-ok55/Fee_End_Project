import "../../CSS/Profile.css"
import imag1 from "../assets/Vector/Layer 5.png";
import imag2 from "../assets/Vector/Layer 6.png";
import imag3 from "../assets/Vector/Layer 7.png";
import imag6 from "../assets/Vector/Layer 81.png";
import imag5 from "../assets/Vector/Layer 9.png";
import imag4 from "../assets/Vector/Layer 10.png";

export default function Profile() {
  return (
    <div id="profile" className="container">
        <div className="div cont1 flex justify-center items-center flex-col">
            <h1 className="text-3xl text-black">Profile</h1>
            <h2 className="text-2xl text-black">I Make Beautiful Thinks</h2>
        </div>
        <div className="div cont2">
        <img className="profile-img" src={imag1} />
        </div>
        <div className="div cont3">
        <img className="profile-img" src={imag2} />
        </div>
        <div className="div cont4">
        <img className="profile-img" src={imag3} />
        </div>
        <div className="div cont5">
        <img className="profile-img" src={imag4} />
        </div>
        <div className="div cont6">
        <img className="profile-img" src={imag5} />
        </div>
        <div className="div cont7">
        <img className="profile-img" src={imag6} />
        </div>
    </div>
  )
}
