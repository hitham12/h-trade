import React from 'react';
import "./home.css";


const Home = () => {
  return (
    
    <div class="hero">
      <div class="left-column">
        <h1><b>H-trade</b></h1>
        <p>
        <b>Get started with our free plan. Receive 100,000$ to start.</b>
        </p>
        
       <button href="/Pricing"><b>Sign Up</b></button>
        <img src="./assets/circle.svg" alt="circle" id="circle-1" />
      </div>
      <div class="right-column">
        <img src="./assets/card.png" alt="card" class="card" />
      </div>
      <div class="right-column1">
        <img src="./assets/circle.svg" alt="circle" id="circle  " />
      </div>
    </div>

  );
}


export default Home;