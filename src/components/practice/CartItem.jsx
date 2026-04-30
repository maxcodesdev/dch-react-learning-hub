function CartItem({ item, onRemoveFromCart }) {
	return (
		<div
			style={{
				border: "1px solid #ddd",
				padding: "15px",
				marginBottom: "10px",
				borderRadius: "5px",
			}}
		>
			<h4>{item.name}</h4>
			<p>Price: £{item.price}</p>
			<p>Quantity: {item.quantity}</p>
			<p>Subtotal: £{item.price * item.quantity}</p>

			<button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
		</div>
	);
}

export default CartItem;