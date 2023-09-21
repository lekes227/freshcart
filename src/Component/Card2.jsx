import { useEffect } from "react"
import image1 from "../images/card2.1.jpg"
import image2 from "../images/card2.2.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
const Card2 = () => {
  useEffect(() =>{
    AOS.init({duration: 3000});
  },[])
  return (
    <div className="row supermarket">
    <div className=" container col-lg-5 fresh" data-aos="zoom-in-right">
        <h1>
        SuperMarket<br/>Fresh Grocery
        </h1>
        <p>Introducing a new model for <br/>online grocery shopping and convenient home delivery.</p>
        <button className="btn">Shop Now</button>
      </div>

      <div className="Baked container col-lg-5" data-aos="zoom-in-left">
        <h2>Freshly Baked Buns</h2>
        <p>Get up to 25% off</p>
        <button className="btn">Shop Now</button>
      </div>
      </div>
  )
}

export default Card2
