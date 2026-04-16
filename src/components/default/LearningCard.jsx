import React from "react";
import { Link } from "react-router-dom";

export function LearningCard({ lesson }) {
	return (
		<Link
			to={lesson.path}
			key={lesson.id}
			style={{
				backgroundColor: "white",
				padding: "20px",
				height: "150px",
				borderRadius: "10px",
				boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
				display: "flex",
				alignItems: "center",
				justifyItems: "center",
				textAlign: "center",
			}}
		>
			<h3
				style={{
					color: "#2c3e50",
					width: "100%",
				}}
			>
				{lesson.title}
			</h3>
		</Link>
	);
}
