import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { lessons } from "../../constants";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const navStyle = {
		backgroundColor: "#2c3e50",
		padding: "15px 0",
		marginBottom: "20px",
		position: "relative",
	};

	const containerStyle = {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "0 20px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	};

	const burgerStyle = {
		display: "flex",
		flexDirection: "column",
		cursor: "pointer",
		padding: "5px",
	};

	const burgerLineStyle = {
		width: "25px",
		height: "3px",
		backgroundColor: "white",
		margin: "3px 0",
		transition: "0.3s",
	};

	const overlayStyle = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		zIndex: 999,
		display: isMenuOpen ? "block" : "none",
	};

	const sheetStyle = {
		position: "fixed",
		top: 0,
		right: isMenuOpen ? "0" : "-300px",
		width: "300px",
		height: "100vh",
		backgroundColor: "#34495e",
		zIndex: 1000,
		transition: "right 0.3s ease",
		boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.3)",
		display: "flex",
		flexDirection: "column",
	};

	const sheetHeaderStyle = {
		padding: "20px",
		borderBottom: "1px solid #4a5f7a",
		backgroundColor: "#2c3e50",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	};

	const sheetBodyStyle = {
		flex: 1,
		padding: "20px",
		overflowY: "auto",
	};

	const closeButtonStyle = {
		background: "none",
		border: "none",
		color: "white",
		fontSize: "24px",
		cursor: "pointer",
	};

	const linkStyle = (path) => ({
		color: location.pathname === path ? "#3498db" : "white",
		textDecoration: "none",
		padding: "15px 0",
		borderBottom: "1px solid #4a5f7a",
		display: "block",
		fontSize: "16px",
		transition: "color 0.2s",
	});

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav style={navStyle}>
				<div style={containerStyle}>
					<Link
						to="/"
						style={{
							color: "white",
							textDecoration: "none",
							fontSize: "24px",
							fontWeight: "bold",
						}}
					>
						My DCH React Learning Hub
					</Link>
					<div style={burgerStyle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<div style={burgerLineStyle}></div>
						<div style={burgerLineStyle}></div>
						<div style={burgerLineStyle}></div>
					</div>
				</div>
			</nav>

			{/* Overlay */}
			<div style={overlayStyle} onClick={() => setIsMenuOpen(false)}></div>

			{/* Slide-out sheet */}
			<div style={sheetStyle}>
				<div style={sheetHeaderStyle}>
					<h3 style={{ color: "white", margin: 0, paddingRight: "40px" }}>
						Navigation
					</h3>
					<button style={closeButtonStyle} onClick={() => setIsMenuOpen(false)}>
						×
					</button>
				</div>

				<div style={sheetBodyStyle}>
					<div>
						<Link to="/" style={linkStyle("/")} onClick={handleLinkClick}>
							Dashboard
						</Link>
					</div>

					<div>
						{lessons.map((lesson) => (
							<Link
								key={lesson.id}
								to={lesson.path}
								style={linkStyle(lesson.path)}
								onClick={handleLinkClick}
							>
								{lesson.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
