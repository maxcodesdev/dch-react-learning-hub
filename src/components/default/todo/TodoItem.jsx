function TodoItem({ todo, onToggle, onRemove }) {
	return (
		<li
			style={{
				backgroundColor: todo.completed ? "#f8f9fa" : "white",
				border: "1px solid #dee2e6",
				borderRadius: "5px",
				padding: "15px",
				margin: "8px 0",
				display: "flex",
				alignItems: "center",
				gap: "15px",
			}}
		>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => onToggle(todo.id)}
				style={{ transform: "scale(1.2)" }}
			/>
			<span
				style={{
					flex: 1,
					textDecoration: todo.completed ? "line-through" : "none",
					color: todo.completed ? "#6c757d" : "#2c3e50",
					fontSize: "16px",
				}}
			>
				{todo.text}
			</span>
			<button
				onClick={() => onRemove(todo.id)}
				style={{
					backgroundColor: "#e74c3c",
					color: "white",
					border: "none",
					padding: "6px 12px",
					borderRadius: "3px",
					fontSize: "14px",
					cursor: "pointer",
				}}
			>
				Delete
			</button>
		</li>
	);
}

export default TodoItem;