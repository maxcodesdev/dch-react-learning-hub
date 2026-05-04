import { LearningCard } from "./LearningCard";

interface LessonType {
	id: number;
	title: string;
	path: string;
	category: string;
}

interface LessonsGridProps {
	lessons: LessonType[];
}



export function LessonsGrid({ lessons }: LessonsGridProps) {
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
