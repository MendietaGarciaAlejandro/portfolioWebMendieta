'use client';
import { motion } from 'framer-motion';

const skills = [
	'Java (Avanzado)',
	'Kotlin (Avanzado)',
	'C# (Avanzado)',
	'Windows Forms (Avanzado)',
	'.NET (Avanzado)',
	'SQL (Avanzado)',
	'Git & GitHub (Avanzado)',
	'Flutter (Avanzado)',
	'Jetpack Compose (Avanzado)',
	'Compose Multiplatform (Avanzado)',
	'Html5 & CSS3 (Intermedio)',
	'Node.js (Intermedio)',
	'Spring Boot (Intermedio)',
	'PL/SQL (Intermedio)',
	'React Native (Intermedio)',
	'Python (Intermedio)',
	'React (Básico)',
	'Angular (Básico)',
	'JavaScript (Básico)',
	'ASP.NET (Básico)',
	'Hibernate (Básico)',
	'JavaFX (Básico)'
];

export const Skills = () => {
	return (
		<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
						Skills
					</h2>
					<div className="flex flex-wrap gap-4 justify-center">
						{skills.map((skill) => (
							<motion.span
								key={skill}
								whileHover={{ scale: 1.1 }}
								className="px-5 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-base shadow-sm"
								transition={{ type: 'spring', stiffness: 300 }}
							>
								{skill}
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};
