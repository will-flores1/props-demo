import React from "react";
import "./product.css";
import ItemDescription from "../ItemDescription/ItemDescription";

interface CoolProps {
	name: string;
	description: string;
	price: number;
}

const Product = ({ name, description, price }: CoolProps) => {
	return (
		<div className="Product">
			<ItemDescription name={name} description={description} />
			<h4>${price}</h4>
		</div>
	);
};

export default Product;
