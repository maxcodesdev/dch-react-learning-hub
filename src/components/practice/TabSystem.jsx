import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

const tabContent = {
	about: "I'm a React developer learning to build amazing applications...",
	skills: ["JavaScript", "React", "CSS", "HTML", "Node.js"],
	projects: [
		{ name: "Todo App", description: "A full-featured todo application" },
		{ name: "Weather App", description: "Real-time weather information" },
	],
};

function TabSystem() {
	const [activeTab, setActiveTab] = useState("about");

	return (
		<div
			style={{
				backgroundColor: "white",
				padding: "24px",
				borderRadius: "12px",
				boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
			}}
		>
			<h2>Tab System</h2>

			<div
				style={{
					display: "flex",
					gap: "12px",
					marginBottom: "20px",
				}}
			>
				<TabButton
					label="About"
					isActive={activeTab === "about"}
					onClick={() => setActiveTab("about")}
				/>

				<TabButton
					label="Skills"
					isActive={activeTab === "skills"}
					onClick={() => setActiveTab("skills")}
				/>

				<TabButton
					label="Projects"
					isActive={activeTab === "projects"}
					onClick={() => setActiveTab("projects")}
				/>
			</div>

			<TabContent activeTab={activeTab} content={tabContent} />
		</div>
	);
}

export default TabSystem;