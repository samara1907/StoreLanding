import React from 'react';


const Card = (props)=>{
	const {productSize, item, plu_upc, price, productId} = props;
	return(
		<div className='bg-light-white dib br2 pa1 mr1 grow bw1 shadow-4'>
			<img alt ='product' src={`https://picsum.photos/${productId}`} width='200' height="200"/>
			<div>
			<h2>{productSize}</h2>
			<p> {item} </p>
			<p> {plu_upc} </p>
			<p> {price} </p>
			<p> {productId} </p>
			</div>
		</div>

	);

}

export default Card;
