function ComponentsLesson() {
	const myName = "Maxwell";
	const myAge = 25;
	const myCity = "London";
	const myHobbies = ["Reading", "Cooking", "Football"];
	const myGoals =["Learn React","Learn Typescript","Learn Solidity"];
	

	return (
		<div
			style={{
				maxWidth: "600px",
				margin: "0 auto",
				padding: "40px 20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: "1.6",
			}}
		>
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
					Learning React Components
				</h1>
				<p style={{ fontSize: "18px", color: "#34495e" }}>
					Hi! My name is {myName}.
				</p>
			</div>

			<div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
					marginBottom: "20px",
				}}
			>
				<h2 style={{ color: "#2c3e50" }}>About Me</h2>
				<p>
					I'm {myAge} years old and I live in {myCity}.
				</p>
				<p>
					I'm building this Learning Hub to track my React journey and showcase
					everything I learn!
				</p>
			</div>

			<div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
				}}
			>
				<h2 style={{ color: "#2c3e50" }}>My Hobbies</h2>
				<ul style={{ listStyle: "none", padding: 0 }}>
					{myHobbies.map((hobby, index) => (
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
	
	<h2 style={{ color: "#2c3e50" }}>My Goals</h2>
	<ul style={{ listStyle: "none", padding: 0 }}>
	{myGoals.map((goal, index) => (
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
    {goal}
  </li>
))}
	</ul>
</div>




		</div>
	);
}

export default ComponentsLesson;