import ProductCard from '@/components/ProductCard';
import React from 'react';

 const getproducts = async() => {
    const res = await fetch ('http://localhost:5000/products');
    return res.json();
 }
const Productspage = async () => {
    const product = await getproducts();
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {product.map((product) => (
          
                <ProductCard  key={product.id} product = {product}></ProductCard>
            
          ))}
        </div>
    );
};

export default Productspage;