import { LearningCard } from "./LearningCard";

export function LessonsGrid({ lessons }) {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
				gap: "20px",
				width: "100%",
			}}
		>
			{lessons.map((lesson) => (
				<LearningCard key={lesson.id} lesson={lesson} />
			))}
		</div>
	);
}
