import { useEffect } from "react"
import image1 from "../images/Amul Butter.jpg"
import image2 from "../images/Salted.jpg"
import image3 from "../images/Slurrp.jpg"
import image4 from "../images/Britannia.jpg"
import image5 from "../images/Blueberry.jpg"
import image6 from "../images/Britannia.jpg"
import image7 from "../images/Onion.jpg"
import image8 from "../images/Kellogg.jpg"
import Counter from "../Component/Counter"
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Cards = () => {
  useEffect(() =>{
    AOS.init({duration: 3000});
  },[])
  return (
    <div className="card-jsx"data-aos="zoom-out">
      <div className="container-fluid row">
       <div className="container image-container col-lg-3 col-6">
       <div className="card"><img src={image1} className="card-image"/>
        <h7>Amul Butter</h7>
        <Counter/>
        </div>
        </div>

        <div className="container image-container col-lg-3 col-6">
        <div className="card"><img src={image2} className="card-image"/>
        <h7>Salted</h7>
        <Counter/>
        </div>
        </div>

        <div className="container image-container col-lg-3 col-6">
        <div className="card"><img src={image3} className="card-image"/>
        <h7>Slurrp</h7>
        <Counter/>
        </div>
        </div>

        <div className="container image-container col-lg-3 col-6">
        <div className="card"><img src={image4} className="card-image"/>
        <h7>Britannia.</h7>
        <Counter/>
        </div>
        </div>

        <div className="container image-container col-lg-3 col-6">
        <div className="card"><img src={image5} className="card-image"/>
        <h7>Blueberry</h7>
        <Counter/>
        </div>
        </div>

        <div className="container image-container col-lg-3 col-6">
        <div className="card"><img src={image6} className="card-image"/>
        <h7>Britannia</h7>
        <Counter/>
        </div>
        </div>

        <div className="container image-container col-lg-3 col-6">
        <div className="card"><img src={image7} className="card-image"/>
        <h7>Onions</h7>
        <Counter/>
        </div>
        </div>

        <div className="container image-container col-lg-3 col-6">
        <div className="card"><img src={image8} className="card-image"/>
        <h7>Kellogg</h7>
        <Counter/>
        </div>
        </div>

       </div>
    </div>
  )
}

export default Cards
