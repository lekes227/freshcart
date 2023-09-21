import {FaRegClock} from "react-icons/fa"
import {FaGift} from "react-icons/fa"
import {FaCube} from "react-icons/fa"
import {FaRecycle} from "react-icons/fa"

const Foot = () => {
  return (
    
    <div className="row container-fluid fluid">
    <div className=" container col-lg-3 up">
       < h1><FaRegClock className="icon"/></h1>
        <h3>
        10 minute grocery now
        </h3>
        <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you</p>
      </div>
         
      <div className="container col-lg-3 up">
      <h1><FaGift className="icon"/></h1>
        <h3>Best Prices & Offers</h3>
        <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
      </div>

      <div className="container col-lg-3 up">
       <h1><FaCube className="icon"/></h1>
      <h3>
      Wide Assortment
      </h3>
      <p>Choose from 5000F products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
    </div>

    <div className="container col-lg-3 up">
    <h1><FaRecycle className="icon"/></h1>
    <h3>
    Easy Returns
    </h3>
    <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.</p>
  </div>


      </div>
    
  )
}

export default Foot
