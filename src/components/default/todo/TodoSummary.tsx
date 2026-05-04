interface Todo {
	id: number;
	text: string;
	completed: boolean;
	priority: string;
	dueDate: string;
	editing: boolean;
}

interface TodoSummaryProps {
	todos: Todo[];
}

function TodoSummary({ todos }:TodoSummaryProps) {
	return (
		<div
			style={{
				marginTop: "20px",
				padding: "15px",
				backgroundColor: "#f8f9fa",
				borderRadius: "5px",
				textAlign: "center",
				color: "#6c757d",
			}}
		>
			Total: {todos.length} todos | Active:{" "}
			{todos.filter((t) => !t.completed).length} | Completed:{" "}
			{todos.filter((t) => t.completed).length}
		</div>
	);
}

export default TodoSummary;