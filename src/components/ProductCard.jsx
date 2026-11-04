import React from 'react';

const ProductCard = ({product}) => {
   const {title, description, price} = product;
    return (
        <div className=" ">
            <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description} </p>
    <p>{price}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


        </div>
    );
};

export default ProductCard;