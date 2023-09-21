import image1 from "../images/tea.jpg"
import image2 from "../images/can1.jpg"
import image3 from "../images/can2.jpg"
import {FaArrowRight } from "react-icons/fa" 
const Oranic = () => {
  return (
    
    <div className="row tea"data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <div className=" container col-lg-5 col-10 cofee">
        <h1> 100% Organic Coffee </h1>
         <p>Get the best deal before close</p>
        <button className="btn">Shop Now <FaArrowRight/></button>
      </div>
        
      <div className="container image-row col-lg-3 col-6 junk">
        <div className="card"><img src={image2} className="card-row"/>
        <h7>Salted</h7>
        <button className="btn btn1">Add Cart</button>
        </div>
        </div>

        <div className="container image-row col-lg-3 col-6 junk">
        <div className="card"><img src={image3} className="card-row"/>
        <h7>Salted</h7>
        <button className="btn btn1">Add Cart</button>
        </div>
        </div>

    </div>
  )
}

export default Oranic
