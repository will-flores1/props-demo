import React from "react";
import "./App.css";
import Product from "./components/Product/Product";

function App() {
	return (
		<div className="App">
			<h1>Hello World</h1>
			<div className="Product-items">
				<Product
					name="Google Home"
					description="Your AI assistant"
					price={59.99}
				/>
				<Product
					name="Amazon Echo"
					description="Alexa at your service"
					price={19.99}
				/>
				<Product
					name="Apple HomeKit"
					description="The best home system"
					price={189.99}
				/>
			</div>
			<h1>hello world</h1>
		</div>
	);
}

export default App;
