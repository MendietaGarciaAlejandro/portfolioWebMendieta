'use client';
import { motion } from 'framer-motion';

export const Projects = () => {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            technologies: ['React', 'Node.js', 'MongoDB'],
            image: '/placeholder.jpg',
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            technologies: ['Python', 'Django', 'PostgreSQL'],
            image: '/placeholder.jpg',
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            technologies: ['Vue.js', 'Express', 'MySQL'],
            image: '/placeholder.jpg',
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
                            className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-gray-600 relative">
                                {/* Placeholder para la imagen del proyecto */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    Imagen del proyecto
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
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
