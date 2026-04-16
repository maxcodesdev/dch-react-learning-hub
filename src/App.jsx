import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ComponentsLesson from "./pages/fundamentals/ComponentsLesson";
import { Navigation } from "./components/default";

function App() {
	return (
		<Router>
			<div
				style={{
					width: "100dvw",
					minHeight: "100vh",
					backgroundColor: "#f8f9fa",
				}}
			>
				<Navigation />
				<div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route
							path="/fundamentals/components"
							element={<ComponentsLesson />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
