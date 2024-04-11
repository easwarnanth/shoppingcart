import React, { useState } from 'react';


function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="card m-2">
      
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' , fontFamily:'cursive'}}>
          Today Sale 
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem', fontFamily:'cursive' }}>
          Special
        </div>
      )}
      <div className="card-body p-4 text-center">
      <img class="card-img-top" src={cardData.imgUrl}  />
        <h5 className="card-title"npm run dev>{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'Symbol Premium Mens Wrinkle', price: '$40.00-$80' , imgUrl: 'https://m.media-amazon.com/images/I/71Jwe2kb5pL._SY550_.jpg'},
    { name: 'Fashion Frill', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true ,imgUrl:"https://m.media-amazon.com/images/I/612xOm1X6LL._AC_UL320_.jpg"},
    { name: 'Fashion Frill', price: '$25', isSale: true ,imgUrl:"https://m.media-amazon.com/images/I/61cY9DOK2XL._SY395_.jpg"},
    { name: 'Lymio', rating: '⭐⭐⭐⭐⭐', price: '$40.00',imgUrl:"https://m.media-amazon.com/images/I/518TgMUUFBL._AC_UL320_.jpg" },
    { name: 'Bacca Bucci Superstar 2.0', rating: '⭐⭐⭐', price: '$25', isSale: true,imgUrl:'https://m.media-amazon.com/images/I/71G07ZNa88S._SY500_.jpg' },
    { name: 'Leriya Fashion Shirts for Men ', rating: '⭐⭐⭐⭐', price: '$40.00-$80' ,imgUrl:"https://m.media-amazon.com/images/I/51yUI8YGhoL._SX385_.jpg"},
    { name: 'Blue Leather Wallet', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true ,imgUrl:"https://m.media-amazon.com/images/I/71tZtxBhOJL._AC_UL320_.jpg"},
    { name: 'Printed Night Suit ', rating: '⭐', price: '$40.00' ,imgUrl:"https://m.media-amazon.com/images/I/61DtPleZhjL._SY550_.jpg"},
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;