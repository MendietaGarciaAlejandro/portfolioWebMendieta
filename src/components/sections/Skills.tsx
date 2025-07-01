'use client';
import { motion } from 'framer-motion';
import { FaJava, FaWindows } from 'react-icons/fa';
import { SiKotlin, SiSharp, SiDotnet, SiMysql, SiGithub, SiFlutter, SiJetbrains, SiHtml5, SiCss3, SiNodedotjs, SiSpring, SiReact, SiAngular, SiJavascript, SiPython, SiHibernate, SiNextdotjs, SiTypescript, SiSolidity } from 'react-icons/si';

const mainSkills = [
	{
		name: 'Java (8, 17, 21)',
		icon: <FaJava className="inline-block mr-2" />,
		desc: 'Avanzado. Backend sencillo, pruebas unitarias con JUnit, proyectos académicos y prácticas.'
	},
	{
		name: 'Kotlin',
		icon: <SiKotlin className="inline-block mr-2" />,
		desc: 'Avanzado. Apps Android y multiplataforma, Coroutines, Flow, DSLs, APIs REST, Koin/Hilt.'
	},
	{
		name: 'C#',
		icon: <SiSharp className="inline-block mr-2" />,
		desc: 'Avanzado. Consola y Windows Forms, LINQ, Entity Framework, prácticas de módulo.'
	},
	{
		name: 'Windows Forms',
		icon: <FaWindows className="inline-block mr-2" />,
		desc: 'Avanzado. UI de escritorio rica, eventos y validaciones personalizadas.'
	},
	{
		name: '.NET (6/7/8)',
		icon: <SiDotnet className="inline-block mr-2" />,
		desc: 'Avanzado. APIs Web, Azure, CI/CD, Docker.'
	},
	{
		name: 'SQL (MySQL, SQL Server, PostgreSQL)',
		icon: <SiMysql className="inline-block mr-2" />,
		desc: 'Avanzado. Diseño y optimización, consultas complejas, procedimientos almacenados.'
	},
	{
		name: 'Git',
		icon: <SiGithub className="inline-block mr-2" />,
		desc: 'Avanzado. Commits, branches, resolución de conflictos, alias.'
	},
	{
		name: 'GitHub',
		icon: <SiGithub className="inline-block mr-2" />,
		desc: 'Avanzado. Pull requests, GitHub Pages, integración básica con Actions.'
	},
	{
		name: 'Flutter',
		icon: <SiFlutter className="inline-block mr-2" />,
		desc: 'Avanzado. Apps móviles sencillas, UI responsive, APIs REST.'
	},
	{
		name: 'Jetpack Compose',
		icon: <SiJetbrains className="inline-block mr-2" />,
		desc: 'Avanzado. UI Android declarativa, modular, testable, Material3, performance tuning.'
	},
	{
		name: 'Compose Multiplatform',
		icon: <SiJetbrains className="inline-block mr-2" />,
		desc: 'Avanzado. Módulos compartidos Android/WASM/escritorio, pipelines multiplataforma.'
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript className="inline-block mr-2" />,
		desc: 'Avanzado. Type safety, interfaces, genéricos, Next.js, React.'
	},
];

const secondarySkills = [
	{
		name: 'Html5 & CSS3',
		icon: <><SiHtml5 className="inline-block mr-2" /><SiCss3 className="inline-block mr-2" /></>,
		desc: 'Intermedio. Maquetación semántica, Flexbox, Grid, responsive.'
	},
	{
		name: 'Microsoft Office',
		icon: <FaWindows className="inline-block mr-2" />,
		desc: 'Avanzado. Word, Excel, PowerPoint, etc.'
	},
	{
		name: 'JavaScript',
		icon: <SiJavascript className="inline-block mr-2" />,
		desc: 'Intermedio. DOM, eventos, ES6+, scripts y ejercicios.'
	},
	{
		name: 'Python',
		icon: <SiPython className="inline-block mr-2" />,
		desc: 'Intermedio. Scripts, análisis de datos, estructuras de datos.'
	},
	{
		name: 'ASP.NET',
		icon: <SiDotnet className="inline-block mr-2" />,
		desc: 'Básico. APIs y páginas Razor, CRUD, autenticación simple.'
	},
	{
		name: 'PL/SQL',
		icon: <SiMysql className="inline-block mr-2" />,
		desc: 'Intermedio. Procedimientos almacenados, cursores, bloqueos.'
	},
	{
		name: 'Spring Boot',
		icon: <SiSpring className="inline-block mr-2" />,
		desc: 'Intermedio. Microservicios básicos, controladores REST, JPA.'
	},
	{
		name: 'Hibernate',
		icon: <SiHibernate className="inline-block mr-2" />,
		desc: 'Básico. ORM simple, entidades y relaciones.'
	},
	{
		name: 'JavaFX',
		icon: <FaJava className="inline-block mr-2" />,
		desc: 'Básico. UI de escritorio básica, integración mínima.'
	},
	{
		name: 'Node.js',
		icon: <SiNodedotjs className="inline-block mr-2" />,
		desc: 'Intermedio. Servidores Express, rutas y middlewares.'
	},
	{
		name: 'Angular',
		icon: <SiAngular className="inline-block mr-2" />,
		desc: 'Básico. Componentes y módulos, binding y servicios simples.'
	},
	{
		name: 'React',
		icon: <SiReact className="inline-block mr-2" />,
		desc: 'Básico. Componentes funcionales, hooks, estado local.'
	},
	{
		name: 'React Native',
		icon: <SiReact className="inline-block mr-2" />,
		desc: 'Intermedio. Pantallas móviles, Expo, navegación básica.'
	},
	{
		name: 'Next.js',
		icon: <SiNextdotjs className="inline-block mr-2" />,
		desc: 'Básico. Páginas estáticas y dinámicas, enrutamiento, API routes.'
	},
	{
		name: 'Solidity',
		icon: <SiSolidity className="inline-block mr-2" />,
		desc: 'Básico. Smart contracts, Hardhat, tests básicos.'
	},
];

export const Skills = () => {
	return (
		<section id="tecnologias" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
						Tecnologías
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
						<div>
							<h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center md:text-left">Principales</h3>
							<div className="flex flex-wrap gap-4 justify-center md:justify-start">
								{mainSkills.map((skill) => (
									<motion.div
										key={skill.name}
										whileHover={{ scale: 1.07, boxShadow: "0 4px 20px rgba(59,130,246,0.2)" }}
										className="flex items-center gap-2 px-5 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-base shadow-sm"
										transition={{ type: 'spring', stiffness: 300 }}
									>
										<span className="text-2xl">{skill.icon}</span>
										<span className="font-semibold">{skill.name}</span>
									</motion.div>
								))}
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center md:text-left">Secundarias</h3>
							<div className="flex flex-wrap gap-4 justify-center md:justify-start">
								{secondarySkills.map((skill) => (
									<motion.div
										key={skill.name}
										whileHover={{ scale: 1.07, boxShadow: "0 4px 20px rgba(59,130,246,0.2)" }}
										className="flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-100 rounded-full text-base shadow-sm"
										transition={{ type: 'spring', stiffness: 300 }}
									>
										<span className="text-2xl">{skill.icon}</span>
										<span className="font-semibold">{skill.name}</span>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
