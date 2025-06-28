'use client';
import { motion } from 'framer-motion';
import { FaJava, FaWindows } from 'react-icons/fa';
import { SiKotlin, SiSharp, SiDotnet, SiMysql, SiGithub, SiFlutter, SiJetbrains, SiHtml5, SiCss3, SiNodedotjs, SiSpring, SiReact, SiAngular, SiJavascript, SiPython, SiHibernate } from 'react-icons/si';

const skills = [
	{ name: 'Java', icon: <FaJava className="inline-block mr-2" /> },
	{ name: 'Kotlin', icon: <SiKotlin className="inline-block mr-2" /> },
	{ name: 'C#', icon: <SiSharp className="inline-block mr-2" /> },
	{ name: 'Windows Forms', icon: <FaWindows className="inline-block mr-2" /> },
	{ name: '.NET', icon: <SiDotnet className="inline-block mr-2" /> },
	{ name: 'SQL', icon: <SiMysql className="inline-block mr-2" /> },
	{ name: 'Git & GitHub', icon: <SiGithub className="inline-block mr-2" /> },
	{ name: 'Flutter', icon: <SiFlutter className="inline-block mr-2" /> },
	{ name: 'Jetpack Compose', icon: <SiJetbrains className="inline-block mr-2" /> },
	{ name: 'Compose Multiplatform', icon: <SiJetbrains className="inline-block mr-2" /> },
	{ name: 'Html5 & CSS3', icon: <><SiHtml5 className="inline-block mr-2" /><SiCss3 className="inline-block mr-2" /></> },
	{ name: 'Node.js', icon: <SiNodedotjs className="inline-block mr-2" /> },
	{ name: 'Spring Boot', icon: <SiSpring className="inline-block mr-2" /> },
	{ name: 'React Native', icon: <SiReact className="inline-block mr-2" /> },
	{ name: 'Python', icon: <SiPython className="inline-block mr-2" /> },
	{ name: 'React', icon: <SiReact className="inline-block mr-2" /> },
	{ name: 'Angular', icon: <SiAngular className="inline-block mr-2" /> },
	{ name: 'JavaScript', icon: <SiJavascript className="inline-block mr-2" /> },
	{ name: 'ASP.NET', icon: <SiDotnet className="inline-block mr-2" /> },
	{ name: 'Hibernate', icon: <SiHibernate className="inline-block mr-2" /> },
	{ name: 'JavaFX', icon: <FaJava className="inline-block mr-2" /> }
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
								key={skill.name}
								whileHover={{ scale: 1.1, boxShadow: "0 4px 20px rgba(59,130,246,0.2)" }}
								className="flex items-center gap-2 px-5 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-base shadow-sm"
								transition={{ type: 'spring', stiffness: 300 }}
							>
								{skill.icon}
								{skill.name}
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};
