function TodoFilters({ filter, setFilter }) {
	return (
		<div style={{ marginBottom: "25px", display: "flex", gap: "10px" }}>
			{["all", "active", "completed"].map((filterType) => (
				<button
					key={filterType}
					onClick={() => setFilter(filterType)}
					style={{
						backgroundColor:
							filter === filterType ? "#3498db" : "#ecf0f1",
						color: filter === filterType ? "white" : "#2c3e50",
						border: "none",
						padding: "8px 16px",
						borderRadius: "5px",
						cursor: "pointer",
						textTransform: "capitalize",
					}}
				>
					{filterType}
				</button>
			))}
		</div>
	);
}

export default TodoFilters;