export interface LessonType {
  id: number;
  title: string;
  path: string;
  category: string;
}


export const lessons: LessonType[] = [
	{
		id: 1,
		title: "React Components & JSX",
		path: "/fundamentals/components",
		category: "React Fundamentals",
	},
	{
		id: 2,
		title: "State & Interactivity", 
		path: "/fundamentals/interactivity",
		category: "React Fundamentals",
	},
	{
		id: 3,
		title: "Dynamic Lists & Communication", // Add this new lesson
		path: "/fundamentals/lists",
		category: "React Fundamentals",
	},
		{
		id: 4,
		title: "Practice", // Add this new lesson
		path: "/components/practice/tabsystem",
		category: "Practice",
	},
	 {
    id: 5,
    title: "TypeScript Integration",  // Add this new lesson
    path: "/fundamentals/typescript",
    category: "React Fundamentals",
  },
];
