// src/pages/fundamentals/InteractivityLesson.jsx
import { useState } from "react";

interface CounterState {
  value: number;
  stepSize: number;
  history: string[];
}



export default function InteractivityLesson() {
const [count, setCount] = useState(0);
const [message, setMessage] = useState("No button clicked yet");
const [inputValue, setInputValue] = useState("");
const [showDetails, setShowDetails] = useState<boolean>(false);
const [newHobby, setNewHobby] = useState<string>("");
const [hobbies, setHobbies] = useState<string[]>(["reading", "gaming", "cooking"]);
// New state for the advanced counter
const [counter, setCounter] = useState<CounterState>({
  value: 0,
  stepSize: 1,
  history: []
});

const handleAddHobby = () => {
		if (newHobby.trim() !== "") {
			// Don't add empty hobbies
			setHobbies([...hobbies, newHobby]); // Add new hobby to existing list
			setNewHobby(""); // Clear the input
		}
	};

  const handleIncrement = ():void => {
	const newValue = counter.value + counter.stepSize;
	setCounter({
 ...counter,
    value: newValue,
    history: [...counter.history, `+${counter.stepSize} (now ${newValue})`].slice(-5)
  });

	}

const handleDecrement = ():void  => {
	const newValue = counter.value - counter.stepSize;
	setCounter({
		...counter,
	value: newValue,
	history: [...counter.history,
		`-${counter.stepSize} (now ${newValue})`
	].slice(-5)
	});
};

const handleReset = ():void => {
	setCounter({
		...counter,
		value:0,
	history: [...counter.history, "Reset to 0"]
	.slice(-5)
});
};

const buttonStyle = (bgColor:string) => ({
	backgroundColor: bgColor,
	color: "white",
	border: "none",
	padding: "10px 20px",
	borderRadius: "5px",
	fontSize: "16px",
	cursor: "pointer",
	minWidth: "80px",
});


	return (
		<div>

			<div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
					marginTop: "20px",
					textAlign: "center",
				}}
			>
				<h2 style={{ color: "#2c3e50" }}>My First Interactive Component!</h2>
				<p style={{ fontSize: "24px", margin: "20px 0" }}>Count: {count}</p>
				<button
					onClick={() => setCount(count + 1)}
					style={{
						backgroundColor: "#3498db",
						color: "white",
						border: "none",
						padding: "10px 20px",
						borderRadius: "5px",
						fontSize: "16px",
						cursor: "pointer",
					}}
				>
					Click me!
				</button>
			</div>
      <div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
					marginTop: "20px",
				}}
			>
				<h2 style={{ color: "#2c3e50" }}>Event Handling Examples</h2>

				{/* onClick Event */}
				<div style={{ marginBottom: "20px" }}>
					<h3>Click Events</h3>
					<button
						onClick={() => setMessage("Left button was clicked!")}
						style={{
							backgroundColor: "#e74c3c",
							color: "white",
							border: "none",
							padding: "10px 20px",
							borderRadius: "5px",
							marginRight: "10px",
							cursor: "pointer",
						}}
					>
						Click Me (Red)
					</button>
					<button
						onClick={() => setMessage("Right button was clicked!")}
						style={{
							backgroundColor: "#2ecc71",
							color: "white",
							border: "none",
							padding: "10px 20px",
							borderRadius: "5px",
							cursor: "pointer",
						}}
					>
						Click Me (Green)
					</button>
					<p style={{ marginTop: "10px", fontStyle: "italic" }}>{message}</p>
				</div>

				{/* onChange Event */}
				<div style={{ marginBottom: "20px" }}>
					<h3>Input Events</h3>
					<input
						type="text"
						placeholder="Type something here..."
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						style={{
							padding: "10px",
							borderRadius: "5px",
							border: "1px solid #ddd",
							width: "300px",
							fontSize: "16px",
						}}
					/>
					<p style={{ marginTop: "10px" }}>
						You typed: <strong>{inputValue}</strong>
					</p>
				</div>
			</div>
      {/* NEW: Conditional rendering section */}
			<div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
					marginTop: "20px",
				}}
			>
				<h2 style={{ color: "#2c3e50" }}>About My Learning Journey</h2>

				<button
					onClick={() => setShowDetails(!showDetails)}
					style={{
						backgroundColor: showDetails ? "#e74c3c" : "#3498db",
						color: "white",
						border: "none",
						padding: "10px 20px",
						borderRadius: "5px",
						marginBottom: "15px",
						cursor: "pointer",
					}}
				>
					{showDetails ? "Hide Details" : "Show Details"}
				</button>

				{showDetails && (
					<div
						style={{
							backgroundColor: "#f8f9fa",
							padding: "15px",
							borderRadius: "5px",
							borderLeft: "4px solid #3498db",
						}}
					>
						<h3>Why I'm Learning React</h3>
						<p>
							I'm learning React because I want to build modern web
							applications. So far I've learned about components, JSX, and now
							state management!
						</p>
						<p>My goals for this week:</p>
						<ul>
							<li>Master useState and event handling</li>
							<li>Build interactive components</li>
							<li>Understand when and why to use state</li>
						</ul>
					</div>
				)}
			</div>
      <div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
					marginTop: "20px",
				}}
			>
				<h2 style={{ color: "#2c3e50" }}>My Growing Hobby List</h2>

				<div style={{ marginBottom: "20px" }}>
					<input
						type="text"
						placeholder="Enter a new hobby..."
						value={newHobby}
						onChange={(e) => setNewHobby(e.target.value)}
						style={{
							padding: "10px",
							borderRadius: "5px",
							border: "1px solid #ddd",
							width: "250px",
							marginRight: "10px",
							fontSize: "16px",
						}}
					/>
					<button
						onClick={handleAddHobby}
						style={{
							backgroundColor: "#2ecc71",
							color: "white",
							border: "none",
							padding: "10px 20px",
							borderRadius: "5px",
							cursor: "pointer",
							fontSize: "16px",
						}}
					>
						Add Hobby
					</button>
				</div>

				<ul style={{ listStyle: "none", padding: 0 }}>
					{hobbies.map((hobby, index) => (
						<li
							key={index}
							style={{
								backgroundColor: "#ecf0f1",
								padding: "10px",
								margin: "5px 0",
								borderRadius: "5px",
								borderLeft: "4px solid #3498db",
							}}
						>
							{hobby}
						</li>
					))}
				</ul>

				<p style={{ marginTop: "15px", color: "#7f8c8d" }}>
					Total hobbies: {hobbies.length}
				</p>
			</div>
      <div
	style={{
		backgroundColor: "white",
		padding: "20px",
		borderRadius: "10px",
		boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
		marginTop: "20px",
	}}
>
	<h2 style={{ color: "#2c3e50" }}>Advanced Interactive Counter</h2>

	{/* Counter Display */}
	<div
		style={{
			fontSize: "48px",
			fontWeight: "bold",
			textAlign: "center",
			margin: "20px 0",
			color: counter.value >= 0 ? "#2ecc71" : "#e74c3c",
		}}
	>
		{counter.value}
	</div>

	{/* Step Size Input */}
	<div style={{ marginBottom: "20px", textAlign: "center" }}>
		<label style={{ marginRight: "10px" }}>Step size:</label>
		<input
			type="number"
			value={counter.stepSize}
			onChange={(e) => setCounter({
				...counter,
				stepSize:Number(e.target.value)})}
			style={{
				padding: "5px",
				width: "80px",
				textAlign: "center",
				border: "1px solid #ddd",
				borderRadius: "3px",
			}}
		/>
	</div>

	{/* Buttons */}
	<div style={{ textAlign: "center", marginBottom: "20px" }}>
		<button onClick={handleDecrement} style={buttonStyle("#e74c3c")}>
			-{counter.stepSize}
		</button>
		<button
			onClick={handleReset}
			style={{ ...buttonStyle("#95a5a6"), margin: "0 10px" }}
		>
			Reset
		</button>
		<button onClick={handleIncrement} style={buttonStyle("#2ecc71")}>
			+{counter.stepSize}
		</button>
	</div>

	{/* History */}
	<div style={{ marginTop: "20px" }}>
		<h3 style={{ color: "#2c3e50" }}>Recent Actions:</h3>
		{history.length === 0 ? (
			<p style={{ color: "#7f8c8d", fontStyle: "italic" }}>No actions yet</p>
		) : (
			<ul style={{ listStyle: "none", padding: 0 }}>
				{counter.history.map((action, index) => (
					<li
						key={index}
						style={{
							backgroundColor: "#f8f9fa",
							padding: "8px",
							margin: "3px 0",
							borderRadius: "3px",
							fontSize: "14px",
						}}
					>
						{action}
					</li>
				))}
			</ul>
		)}
	</div>
</div>
	
		</div>
	);

}
