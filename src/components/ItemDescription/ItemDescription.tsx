import React, { Component } from "react";

interface ItemProps {
	name?: string;
	description?: string;
}

class ItemDescription extends Component<ItemProps> {
	render() {
		const { name, description } = this.props;

		return (
			<>
				<p>{name}</p>
				<p style={{ fontStyle: "italic" }}>{description}</p>
			</>
		);
	}
}

export default ItemDescription;

// Functional approach
// const ItemDescription = ({ name, description }: ItemProps) => {
// 	return (
// 		<>
// 			<p>{name}</p>
// 			<p style={{ fontStyle: "italic" }}>{description}</p>
// 		</>
// 	);
// };
