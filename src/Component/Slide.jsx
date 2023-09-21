import image1 from "../images/fresh1.jpg"
import image2 from "../images/fresh2.jpg"
import{FaArrowRight} from "react-icons/Fa"

const Slide = () => {
  return (
    <div className="slide">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active slide1" data-bs-interval="10000">
      
        <h1>
        SuperMarket For <br/>Fresh Grocery
        </h1>
       <p>introduced a new model for<br/> online grocery shopping and convenient home delivery.</p>
        <button className="btn"> Shop Now <FaArrowRight/></button>
      </div>
      
      <div className="carousel-item slide2" data-bs-interval="2000">
        <h1>
        Free Shipping on<br/>orders over $100
        </h1>
        <p>Free shipping to First-Time<br/>Customers Only, After promotions and discounts are applied.</p>
        <button className="btn">Shop Now</button>
      </div>
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default Slide
