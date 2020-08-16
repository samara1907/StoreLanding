import React from 'react';
import {products} from './components/Card/products';


const SearchBox =({search}) =>{
	const filterproducts = products.filter(products=>{
		return products.item.LowerCase().includes(search.toLowerCase());
		})
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b-green bg-light-blue' 
		type='search' 
		placeholder='search robots'
		onChange ={filterproducts}

		 />

		</div>
	)
}


export default serachBox;