'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
    const projects = [
        {
            title: 'ConneXus',
            description:
                'App multiplataforma de mensajería privada (E2EE) y foro anónimo. UI y lógica compartida con Kotlin Multiplatform y Jetpack Compose. Backend escalable con Supabase (PostgreSQL, Auth, Realtime).',
            technologies: [
                'Kotlin Multiplatform',
                'Jetpack Compose',
                'Supabase',
                'PostgreSQL',
                'Material Design',
            ],
            image: '/proyectos/connexus.png', // pon aquí una imagen real si tienes
            github: 'https://github.com/ConneXusServerless/ConneXus_serverless',
            inDevelopment: false,
        },
        {
            title: 'Lista de Compra Compose',
            description:
                'Aplicación Android moderna para gestionar listas de la compra. UI con Jetpack Compose, Material Design y soporte para Android 8+. Código limpio y modular.',
            technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'AndroidX'],
            image: '/proyectos/listacompra.png',
            github: 'https://github.com/MendietaGarciaAlejandro/ListaCompraCompose',
            inDevelopment: false,
        },
        {
            title: 'PathOut',
            description:
                'App multiplataforma (web, móvil y escritorio) para gestionar puntos de interés en mapas. Interfaz centralizada, gestión de favoritos, exportación de datos y soporte multiplataforma con React Native, Expo y Tauri.',
            technologies: [
                'React Native',
                'Expo',
                'Redux Toolkit',
                'SQLite',
                'Leaflet',
                'Tauri',
                'TypeScript',
            ],
            image: '/proyectos/pathout.png',
            github: 'https://github.com/MendietaGarciaAlejandro/PathOut',
            inDevelopment: true,
        },
        {
            title: 'MiRecetario',
            description:
                'App Flutter para gestionar recetas, planificar menús semanales y generar automáticamente la lista de la compra. Sincronización multiplataforma y base de datos local.',
            technologies: [
                'Flutter',
                'Dart',
                'Drift',
                'Riverpod',
                'SQLite',
                'IndexedDB',
            ],
            image: '/proyectos/mirecetario.png',
            github: 'https://github.com/MendietaGarciaAlejandro/mirecetario',
            inDevelopment: true,
        },
        {
            title: 'OrganizaME',
            description:
                'Aplicación multiplataforma para organización personal y gestión de tareas, desarrollada con Kotlin Multiplatform y Compose Multiplatform. Permite usar la misma base de código en Android, Web y Desktop.',
            technologies: [
                'Kotlin Multiplatform',
                'Compose Multiplatform',
                'Android',
                'Web',
                'Desktop',
            ],
            image: '/proyectos/organizame.png', // Añade la imagen correspondiente en /public/proyectos
            github: 'https://github.com/MendietaGarciaAlejandro/OrganizaME',
            inDevelopment: true,
        },
    ];

    return (
        <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Mis Proyectos
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Una muestra de mi trabajo más reciente
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-600 border-b-2 border-gray-100 dark:border-gray-700">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top rounded-t-lg"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index === 0}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        Imagen del proyecto
                                    </div>
                                )}
                                {project.inDevelopment && (
                                    <div className="absolute top-2 right-2">
                                        <span className="px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-full shadow-sm">
                                            En desarrollo
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Ver repositorio de ${project.title} en GitHub`}
                                        title="Ver en GitHub"
                                        className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors ml-2"
                                    >
                                        <FaGithub className="w-7 h-7" />
                                    </a>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
