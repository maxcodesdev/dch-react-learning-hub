function TabButton({ label, isActive, onClick }) {
	return (
		<button
			onClick={onClick}
			style={{
				padding: "10px 18px",
				borderRadius: "8px",
				border: isActive ? "2px solid #2563eb" : "1px solid #d1d5db",
				backgroundColor: isActive ? "#2563eb" : "white",
				color: isActive ? "white" : "#111827",
				cursor: "pointer",
				fontWeight: isActive ? "700" : "500",
				transition: "all 0.3s ease",
			}}
		>
			{label}
		</button>
	);
}

export default TabButton;