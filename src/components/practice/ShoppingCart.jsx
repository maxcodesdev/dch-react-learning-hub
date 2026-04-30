import { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function ShoppingCart() {
	const products = [
		{ id: 1, name: "Laptop", price: 999 },
		{ id: 2, name: "Mouse", price: 25 },
		{ id: 3, name: "Keyboard", price: 75 },
		{ id: 4, name: "Monitor", price: 299 },
	];

	const [cartItems, setCartItems] = useState([]);

	const handleAddToCart = (product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);

		if (existingItem) {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
	};

	const handleRemoveFromCart = (id) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div style={{ maxWidth: "800px", margin: "0 auto", padding: "30px" }}>
			<h2>Shopping Cart</h2>

			<ProductList products={products} onAddToCart={handleAddToCart} />

			<h3>Cart</h3>

			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>
					{cartItems.map((item) => (
						<CartItem
							key={item.id}
							item={item}
							onRemoveFromCart={handleRemoveFromCart}
						/>
					))}

					<h3>Total: £{totalPrice}</h3>
				</div>
			)}
		</div>
	);
}

export default ShoppingCart;