function TabContent({ activeTab, content }) {
	return (
		<div
			style={{
				padding: "20px",
				border: "1px solid #e5e7eb",
				borderRadius: "10px",
				backgroundColor: "#f9fafb",
				minHeight: "140px",
				transition: "all 0.3s ease",
			}}
		>
			{activeTab === "about" && (
				<p
					style={{
						fontSize: "16px",
						lineHeight: "1.6",
						color: "#374151",
					}}
				>
					{content.about}
				</p>
			)}

			{activeTab === "skills" && (
				<ul>
					{content.skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			)}

			{activeTab === "projects" && (
				<div>
					{content.projects.map((project) => (
						<div
							key={project.name}
							style={{
								marginBottom: "12px",
								padding: "12px",
								backgroundColor: "white",
								borderRadius: "8px",
								border: "1px solid #e5e7eb",
							}}
						>
							<h3>{project.name}</h3>
							<p>{project.description}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default TabContent;