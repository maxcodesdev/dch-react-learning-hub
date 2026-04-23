function TodoInput({ newTodo, setNewTodo, handleAddTodo }) {
	return (
		<div style={{ marginBottom: "25px" }}>
			<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
				<input
					type="text"
					placeholder="Add a new todo..."
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
					style={{
						flex: 1,
						padding: "12px",
						borderRadius: "5px",
						border: "1px solid #ddd",
						fontSize: "16px",
					}}
				/>

				<button
					onClick={handleAddTodo}
					style={{
						backgroundColor: "#2ecc71",
						color: "white",
						border: "none",
						padding: "12px 20px",
						borderRadius: "5px",
						fontSize: "16px",
						cursor: "pointer",
					}}
				>
					Add Todo
				</button>
			</div>
		</div>
	);
}

export default TodoInput;