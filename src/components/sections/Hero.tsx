"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            ¡Hola! Soy{" "}
                            <span className="text-blue-600 dark:text-blue-400">
                                Alejandro Mendieta García
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Desarrollador de software multiplataforma apasionado por la
                            innovación y la tecnología.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#contacto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Contáctame
                            </motion.a>
                            <motion.a
                                href="#proyectos"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            >
                                Ver Proyectos
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src="/yo.png"
                                alt="Foto de Alejandro Mendieta García"
                                width={300}
                                height={400}
                                className="object-cover rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
