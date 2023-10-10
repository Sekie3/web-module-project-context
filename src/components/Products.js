import React from 'react';
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext';
import { useContext } from 'react';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
