// src/pages/fundamentals/ListsLesson.jsx
import { useState } from "react";
import TodoItem from "../../components/default/todo/TodoItem";
import TodoFilters from "../../components/default/todo/TodoFilters";
import TodoInput from "../../components/default/todo/TodoInput";
import TodoSummary from "../../components/default/todo/TodoSummary";

function ListsLesson() {
	// State for todos, new todo input, and filter
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "Learn React basics",
			completed: true,
			priority: "high",
			dueDate: "2024-12-25",
			editing: false,
		},
		{
			id: 2,
			text: "Build todo app",
			completed: false,
			priority: "medium",
			dueDate: "2024-12-28",
			editing: false,
		},
		{
			id: 3,
			text: "Master component communication",
			completed: false,
			priority: "low",
			dueDate: "2024-12-30",
			editing: false,
		},
	]);

	const [newTodo, setNewTodo] = useState("");
	const [filter, setFilter] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTodos, setSelectedTodos] = useState([]);
	const [sharedCounter, setSharedCounter] = useState(0);
	const [selectedUser, setSelectedUser] = useState(null);

	const [users] = useState([
		{
			id: 1,
			name: "Alice Johnson",
			email: "alice@example.com",
			role: "Developer",
		},
		{ id: 2, name: "Bob Smith", email: "bob@example.com", role: "Designer" },
		{ id: 3, name: "Carol Davis", email: "carol@example.com", role: "Manager" },
	]);

	const getNewId = () => {
		return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
	};

	const handleAddTodo = () => {
		if (newTodo.trim() !== "") {
			const todoToAdd = {
				id: getNewId(),
				text: newTodo,
				completed: false,
				priority: "medium",
				dueDate: "",
				editing: false,
			};
			setTodos([...todos, todoToAdd]);
			setNewTodo("");
		}
	};

	const handleToggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const handleRemoveTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEditTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, editing: !todo.editing }
					: { ...todo, editing: false }
			)
		);
	};

	const handleSaveTodo = (id, newText) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, text: newText, editing: false } : todo
			)
		);
	};

	const getFilteredTodos = () => {
		let filtered = todos;

		if (filter === "active") {
			filtered = filtered.filter((todo) => !todo.completed);
		} else if (filter === "completed") {
			filtered = filtered.filter((todo) => todo.completed);
		}

		if (searchTerm) {
			filtered = filtered.filter((todo) =>
				todo.text.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		return filtered;
	};

	const filteredTodos = getFilteredTodos();

	return (
		<div
			style={{
				maxWidth: "800px",
				margin: "0 auto",
				padding: "40px 20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}
		>
			{/* Header */}
			<div
				style={{
					backgroundColor: "#f0f8ff",
					padding: "20px",
					borderRadius: "10px",
					marginBottom: "30px",
					textAlign: "center",
				}}
			>
				<h1 style={{ color: "#2c3e50", marginBottom: "10px" }}>
					Dynamic Lists & Component Communication
				</h1>
				<p style={{ fontSize: "18px", color: "#34495e" }}>
					Building interactive applications with dynamic data!
				</p>
			</div>

			{/* Complete Todo Application */}
			<div
				style={{
					backgroundColor: "white",
					padding: "30px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
					marginBottom: "30px",
				}}
			>
				<h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
					Complete Todo Application
				</h2>

				{/* Add Todo Section */}
				<TodoInput
					newTodo={newTodo}
					setNewTodo={setNewTodo}
					handleAddTodo={handleAddTodo}
				/>

				{/* Filter Buttons */}
				<TodoFilters filter={filter} setFilter={setFilter} />

				{/* Search Input */}
				<div style={{ marginBottom: "20px" }}>
					<input
						type="text"
						placeholder="Search todos..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						style={{
							width: "100%",
							padding: "10px",
							borderRadius: "5px",
							border: "1px solid #ddd",
							fontSize: "16px",
						}}
					/>
				</div>

				{/* Todo List */}
				<div>
					{filteredTodos.length === 0 ? (
						<div
							style={{
								textAlign: "center",
								padding: "40px",
								color: "#7f8c8d",
								fontStyle: "italic",
							}}
						>
							{filter === "all"
								? "No todos yet. Add one above!"
								: `No ${filter} todos found.`}
						</div>
					) : (
						<ul style={{ listStyle: "none", padding: 0 }}>
							{filteredTodos.map((todo) => (
								<TodoItem
									key={todo.id}
									todo={todo}
									onToggleTodo={handleToggleTodo}
									onRemoveTodo={handleRemoveTodo}
								/>
							))}
						</ul>
					)}
				</div>

				{/* Summary */}
				<TodoSummary todos={todos} />
			</div>

			<div
				style={{
					backgroundColor: "white",
					padding: "30px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
					marginBottom: "30px",
				}}
			>
				<h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
					Component Communication Patterns
				</h2>

				<div style={{ marginBottom: "30px" }}>
					<h3 style={{ color: "#34495e", marginBottom: "15px" }}>
						Shared State (Lifting State Up)
					</h3>
					<p style={{ marginBottom: "15px", color: "#6c757d" }}>
						Multiple components sharing the same counter state:
					</p>

					<div
						style={{
							border: "1px solid #dee2e6",
							borderRadius: "5px",
							padding: "20px",
							backgroundColor: "#f8f9fa",
						}}
					>
						<CounterDisplay count={sharedCounter} />
						<div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
							<CounterButton
								onClick={() => setSharedCounter(sharedCounter + 1)}
								label="Component A: +1"
								color="#2ecc71"
							/>
							<CounterButton
								onClick={() => setSharedCounter(sharedCounter + 2)}
								label="Component B: +2"
								color="#3498db"
							/>
							<CounterButton
								onClick={() => setSharedCounter(0)}
								label="Reset"
								color="#e74c3c"
							/>
						</div>
					</div>
				</div>

				<div>
					<h3 style={{ color: "#34495e", marginBottom: "15px" }}>
						Parent-Child Communication
					</h3>
					<p style={{ marginBottom: "15px", color: "#6c757d" }}>
						Child components telling parent what was selected:
					</p>

					<div
						style={{
							border: "1px solid #dee2e6",
							borderRadius: "5px",
							padding: "20px",
							backgroundColor: "#f8f9fa",
						}}
					>
						<UserList
							users={users}
							onUserSelect={setSelectedUser}
							selectedUser={selectedUser}
						/>
						<UserDetails user={selectedUser} />
					</div>
				</div>
			</div>
		</div>
	);
}

function CounterDisplay({ count }) {
	return (
		<div style={{ textAlign: "center", marginBottom: "10px" }}>
			<h4 style={{ color: "#2c3e50", fontSize: "24px", margin: 0 }}>
				Shared Counter: {count}
			</h4>
		</div>
	);
}

function CounterButton({ onClick, label, color }) {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: color,
				color: "white",
				border: "none",
				padding: "10px 15px",
				borderRadius: "5px",
				cursor: "pointer",
				fontSize: "14px",
			}}
		>
			{label}
		</button>
	);
}

function UserList({ users, onUserSelect, selectedUser }) {
	return (
		<div style={{ marginBottom: "20px" }}>
			<h4 style={{ color: "#2c3e50", marginBottom: "10px" }}>Select a User:</h4>
			<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
				{users.map((user) => (
					<button
						key={user.id}
						onClick={() => onUserSelect(user)}
						style={{
							backgroundColor:
								selectedUser?.id === user.id ? "#3498db" : "#ecf0f1",
							color: selectedUser?.id === user.id ? "white" : "#2c3e50",
							border: "none",
							padding: "8px 12px",
							borderRadius: "5px",
							cursor: "pointer",
						}}
					>
						{user.name}
					</button>
				))}
			</div>
		</div>
	);
}

function UserDetails({ user }) {
	if (!user) {
		return (
			<div
				style={{
					padding: "20px",
					textAlign: "center",
					color: "#6c757d",
					fontStyle: "italic",
				}}
			>
				Select a user to see their details
			</div>
		);
	}

	return (
		<div
			style={{
				backgroundColor: "white",
				padding: "15px",
				borderRadius: "5px",
				border: "1px solid #dee2e6",
			}}
		>
			<h4 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>{user.name}</h4>
			<p style={{ margin: "5px 0", color: "#6c757d" }}>
				<strong>Email:</strong> {user.email}
			</p>
			<p style={{ margin: "5px 0", color: "#6c757d" }}>
				<strong>Role:</strong> {user.role}
			</p>
		</div>
	);
}

export default ListsLesson;