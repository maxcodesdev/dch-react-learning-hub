import { LessonsGrid } from "../components/default";
import { lessons } from "../constants";

export default function Dashboard() {
	return (
		<div>
			<h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
				Week 1: React Fundamentals
			</h2>

			<LessonsGrid lessons={lessons} />
		</div>
	);
}
