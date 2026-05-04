// Update your TypeScriptLesson.tsx with this basic example
import { useState } from 'react';

// This is a TypeScript interface - it defines the shape of our data
interface Person {
  name: string;
  age: number;
  city: string;
  isLearning: boolean;
}

function TypeScriptLesson() {
  // TypeScript knows this is a Person object
  const [person, setPerson] = useState<Person>({
    name: "Maxwell",
    age: 25,
    city: "London", 
    isLearning: true
  });

  // TypeScript knows this is a string
  const [message, setMessage] = useState<string>("Welcome to TypeScript!");

   interface ColorOption {
	name: string;
	hex: string;
}

const colors: ColorOption[] = [
	{ name: "Blue", hex: "#3498db" },
	{ name: "Green", hex: "#2ecc71" },
	{ name: "Red", hex: "#e74c3c" },
];


const [selectedColor, setSelectedColor] = useState<ColorOption>(colors[0]);

const handleColorSelect = (color: ColorOption): void => {
	setSelectedColor(color);
};

interface Skill {
	id: number;
	name: string;
	level: "beginner" | "intermediate" | "advanced";
	learned: boolean;
}

const [skills, setSkills] = useState<Skill[]>([
	{ id: 1, name: "React", level: "beginner", learned: true },
	{ id: 2, name: "TypeScript", level: "beginner", learned: false },
	{ id: 3, name: "Tailwind CSS", level: "intermediate", learned: false },
	{ id: 4, name: "Solidity", level: "advanced", learned: false },
]);

const [skillFilter, setSkillFilter] = useState<
	"all" | "beginner" | "intermediate" | "advanced"
>("all");

const handleToggleSkill = (id: number): void => {
	setSkills(
		skills.map((skill) =>
			skill.id === id ? { ...skill, learned: !skill.learned } : skill
		)
	);
};

const filteredSkills =
	skillFilter === "all"
		? skills
		: skills.filter((skill) => skill.level === skillFilter);


    interface FeedbackData {
	name: string;
	rating: number;
	comments: string;
	wouldRecommend: boolean;
}


const [feedback, setFeedback] = useState<FeedbackData>({
	name: "",
	rating: 5,
	comments: "",
	wouldRecommend: false,
});

const [submittedFeedback, setSubmittedFeedback] =
	useState<FeedbackData | null>(null);

const handleFeedbackChange = (
	field: keyof FeedbackData,
	value: string | number | boolean
): void => {
	setFeedback({
		...feedback,
		[field]: value,
	});
};

const handleSubmitFeedback = (
	e: React.FormEvent<HTMLFormElement>
): void => {
	e.preventDefault();
	setSubmittedFeedback(feedback);
};

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#f0f8ff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#2c3e50' }}>TypeScript Integration</h1>
        <p style={{ fontSize: '18px', color: '#34495e' }}>{message}</p>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#2c3e50' }}>TypeScript Basics</h2>
        <p>
          {person.name} is {person.age} years old, lives in {person.city}, 
          and is {person.isLearning ? "currently learning" : "not learning"} TypeScript!
        </p>
        
        {/* Try typing 'person.' here and see VS Code's autocomplete! */}
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
	<h2 style={{ color: selectedColor.hex }}>Typed Colour Picker</h2>

	<p>
		Selected colour: <strong>{selectedColor.name}</strong>
	</p>

	<div style={{ display: "flex", gap: "10px" }}>
		{colors.map((color) => (
			<button
				key={color.name}
				onClick={() => handleColorSelect(color)}
				style={{
					backgroundColor: color.hex,
					color: "white",
					border: "none",
					padding: "10px 15px",
					borderRadius: "5px",
					cursor: "pointer",
				}}
			>
				{color.name}
			</button>
		))}
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
	<h2 style={{ color: "#2c3e50" }}>Typed Skills List</h2>

	<div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
		{(["all", "beginner", "intermediate", "advanced"] as const).map(
			(level) => (
				<button
					key={level}
					onClick={() => setSkillFilter(level)}
					style={{
						padding: "8px 12px",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						backgroundColor:
							skillFilter === level ? "#3498db" : "#ecf0f1",
						color: skillFilter === level ? "white" : "#2c3e50",
						textTransform: "capitalize",
					}}
				>
					{level}
				</button>
			)
		)}
	</div>

	<ul style={{ listStyle: "none", padding: 0 }}>
		{filteredSkills.map((skill) => (
			<li
				key={skill.id}
				style={{
					padding: "10px",
					marginBottom: "8px",
					backgroundColor: "#f8f9fa",
					borderRadius: "5px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<span>
					<strong>{skill.name}</strong> — {skill.level}
				</span>

				<button onClick={() => handleToggleSkill(skill.id)}>
					{skill.learned ? "Learned" : "Mark as Learned"}
				</button>
			</li>
		))}
	</ul>
</div>
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
	<h2 style={{ color: "#2c3e50" }}>Typed Feedback Form</h2>

	<form onSubmit={handleSubmitFeedback}>
		<input
			type="text"
			placeholder="Your name"
			value={feedback.name}
			onChange={(e) => handleFeedbackChange("name", e.target.value)}
			style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
		/>

		<input
			type="number"
			min="1"
			max="5"
			value={feedback.rating}
			onChange={(e) =>
				handleFeedbackChange("rating", Number(e.target.value))
			}
			style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
		/>

		<textarea
			placeholder="Your comments"
			value={feedback.comments}
			onChange={(e) => handleFeedbackChange("comments", e.target.value)}
			style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
		/>

		<label>
			<input
				type="checkbox"
				checked={feedback.wouldRecommend}
				onChange={(e) =>
					handleFeedbackChange("wouldRecommend", e.target.checked)
				}
			/>
			{" "}Would you recommend this lesson?
		</label>

		<br />

		<button type="submit" style={{ marginTop: "15px", padding: "10px 15px" }}>
			Submit Feedback
		</button>
	</form>

	{submittedFeedback && (
		<div style={{ marginTop: "20px", backgroundColor: "#f8f9fa", padding: "15px" }}>
			<h3>Submitted Feedback</h3>
			<p>Name: {submittedFeedback.name}</p>
			<p>Rating: {submittedFeedback.rating}/5</p>
			<p>Comments: {submittedFeedback.comments}</p>
			<p>
				Recommend: {submittedFeedback.wouldRecommend ? "Yes" : "No"}
			</p>
		</div>
	)}
</div>
    </div>
  );
}




export default TypeScriptLesson;