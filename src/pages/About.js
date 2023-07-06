import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})` }}>
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Welcome to our pizza shop! We take pride in serving delicious pizzas crafted with love and the finest ingredients. 
                Whether you're a fan of classic flavors or looking to try something unique, our diverse menu has something to satisfy every craving. From the savory 
                Pepperoni Pizza to the refreshing Margherita Pizza, each slice is a mouthwatering delight. For those seeking an adventure, don't miss out on our PedroTech Special Pizza, 
                a tantalizing blend of flavors that will leave you craving for more. We also cater to dietary preferences with our Vegan Pizza, a plant-based delight bursting with flavor. 
                And yes, we even offer Pineapple Pizza for those who enjoy a sweet and savory combination. Join us for a pizza experience like no other and indulge in the ultimate comfort food. 
                Your taste buds will thank you!</p>
        </div>
    </div>
  )
}

export default About
