import './Hero.css';
import Heart from '../Assets/health2.png'



function Hero() {
  return (
    <div className="hero" >
    <div className="hero-left">
      <h1>Empowering Mental Wellness: Your Journey Starts Here!!!</h1>
      <p>We prioritize your well-being, offering a compassionate space where healing begins. Our team of experienced professionals is dedicated to guiding you through life challenges, providing personalized care tailored to your unique needs. Whether you seeking therapy, coping strategies, or simply a listening ear, We are here to empower you on your journey toward mental wellness.</p>
      <div className="buttons">
        <button className='button1' >Explore Now</button>
        <button className='button2' >Services</button>
      </div>
    </div>


  <div className="hero-right">
    <img src={Heart}/>
  </div>
    </div>
  )
}

export default Hero
