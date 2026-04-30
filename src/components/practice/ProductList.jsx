function ProductList({ products, onAddToCart }) {
	return (
		<div>
			<h3>Products</h3>

			{products.map((product) => (
				<div
					key={product.id}
					style={{
						border: "1px solid #ddd",
						padding: "15px",
						marginBottom: "10px",
						borderRadius: "5px",
					}}
				>
					<h4>{product.name}</h4>
					<p>Price: £{product.price}</p>

					<button onClick={() => onAddToCart(product)}>Add to Cart</button>
				</div>
			))}
		</div>
	);
}

export default ProductList;