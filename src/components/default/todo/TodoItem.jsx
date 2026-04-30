// src/components/default/todo/TodoItem.jsx

import { useState } from "react";

function TodoItem({
	todo,
	onToggleTodo,
	onRemoveTodo,
	onEditTodo,
	onSaveTodo,
}) {
	const [editText, setEditText] = useState(todo.text);

	return (
		<li
			style={{
				backgroundColor: "#f8f9fa",
				padding: "15px",
				marginBottom: "10px",
				borderRadius: "8px",
				border: "1px solid #ddd",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "10px",
				}}
			>
				<div style={{ flex: 1 }}>
					{todo.editing ? (
						<div>
							<input
								type="text"
								value={editText}
								onChange={(e) => setEditText(e.target.value)}
								style={{
									padding: "8px",
									width: "100%",
									marginBottom: "10px",
									borderRadius: "5px",
									border: "1px solid #ccc",
								}}
							/>

							<button
								onClick={() => onSaveTodo(todo.id, editText)}
								style={{
									marginRight: "8px",
									padding: "6px 12px",
									backgroundColor: "#2ecc71",
									color: "white",
									border: "none",
									borderRadius: "5px",
									cursor: "pointer",
								}}
							>
								Save
							</button>
						</div>
					) : (
						<>
							<h4
								style={{
									margin: "0 0 8px 0",
									textDecoration: todo.completed
										? "line-through"
										: "none",
								}}
							>
								{todo.text}
							</h4>

							<p style={{ margin: "4px 0", fontSize: "14px" }}>
								<strong>Priority:</strong> {todo.priority}
							</p>

							<p style={{ margin: "4px 0", fontSize: "14px" }}>
								<strong>Due Date:</strong> {todo.dueDate || "No due date"}
							</p>
						</>
					)}
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					<button
						onClick={() => onToggleTodo(todo.id)}
						style={{
							padding: "6px 10px",
							backgroundColor: todo.completed ? "#f39c12" : "#3498db",
							color: "white",
							border: "none",
							borderRadius: "5px",
							cursor: "pointer",
						}}
					>
						{todo.completed ? "Undo" : "Complete"}
					</button>

					<button
						onClick={() => onEditTodo(todo.id)}
						style={{
							padding: "6px 10px",
							backgroundColor: "#9b59b6",
							color: "white",
							border: "none",
							borderRadius: "5px",
							cursor: "pointer",
						}}
					>
						Edit
					</button>

					<button
						onClick={() => onRemoveTodo(todo.id)}
						style={{
							padding: "6px 10px",
							backgroundColor: "#e74c3c",
							color: "white",
							border: "none",
							borderRadius: "5px",
							cursor: "pointer",
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
}

export default TodoItem;