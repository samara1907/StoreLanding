import React from 'react';
import Card from './Card';

const CardList=({ products }) => {
  return(
    <div>
    {products.map((product , i) =>{
    return <Card 
    productSize={products[i].productSize} 
    item={products[i].item} 
    plu_upc={products[i].plu_upc}
    price={products[i].price}
    productId={products[i].productId} />
  })}
     </div>
   );
}

export default CardList
