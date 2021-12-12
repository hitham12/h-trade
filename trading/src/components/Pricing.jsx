import React from 'react';
import "./pricing.css";

const App = () => {
  return (

    <div class="container group">
    <div class="grid-1-5">
      <h2>Basic</h2>
      <h3><span class="uppercase">Free</span></h3>
      <p>10,000 monthly visits</p>
      <ul>
        <li>Trading operations are limited to 50 operations per month.</li>
        <li>Unlimited Data Transfer</li>
        <li>10GB Local Storage</li>
      </ul>
      <a href="/Register" class="button">Sign Up</a>
    </div>
    <div class="grid-1-5">
      <h2>Startup</h2>
      <h3><sup>$</sup>79<span class="small">/mo</span></h3>
      <p>25,000 monthly visits</p>
      <ul>
        <li>Trading operations are limited to 150 operations per month.</li>
        <li>Unlimited Data Transfer</li>
        <li>20GB Local Storage</li>
      </ul>   
      <a href="/Register" class="button">Sign Up</a> 
    </div>
    <div class="grid-1-5">
      <h2>Pro</h2>
      <h3><sup>$</sup>179<span class="small">/mo</span></h3>
      <p>75,000 monthly visits</p>
      <ul>
        <li>Non-diversionary trading and investing, with more graphs, intervals and indicators</li>
        <li>Unlimited Data Transfer</li>
        <li>50GB Local Storage</li>
      </ul> 
      <a href="/Register" class="button">Sign Up</a>   
    </div>
    <div class="grid-1-5">
      <h2>Pro+</h2>
      <h3><sup>$</sup>399<span class="small">/mo</span></h3>
      <p>225,000 monthly visits</p>
      <ul>
        <li>Intra-daily technical analysis for day traders looking to take things to the next level.</li>
        <li>Unlimited Data Transfer</li>
        <li>100GB Local Storage</li>
      </ul> 
      <a href="/Register" class="button">Sign Up</a>   
    </div>
    <div class="grid-1-5">
      <h2>Premium</h2>
      <h3><sup>$</sup>599<span class="small">/mo</span></h3>
      <p>1M+ monthly visits</p>
      <ul>
        <li>Accuracy and maximum data to seize all possible opportunities.</li>
        <li>Unlimited Data Transfer</li>
        <li>250GB Local Storage</li>
      </ul>
      <a href="/Register" class="button">Sign Up</a>
    </div>    
  </div>
  )
}


export default App;
