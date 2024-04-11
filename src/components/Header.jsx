import React from 'react';
import '../App.css'

function Header() {
  return (
    <header className="bg-dark mb-5 py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder" style={{color:'red', fontFamily:'cursive'}}>Men Shoppy Spot</h1>
          <p className="lead fw-normal text-white-50 mb-0">Your kind of <b style={{color:'red', fontFamily:'cursive',fontSize:'x-large'}}>Dressing</b> Shows your <b style={{color:'red', fontFamily:'cursive',fontSize:'x-large'}}>Personality</b></p>
        </div>
      </div>
    </header>
  );
}

export default Header;