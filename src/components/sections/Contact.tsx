'use client';
import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <section id="contacto" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        ¡Hablemos!
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        ¿Tienes un proyecto en mente? Me encantaría escucharte
                    </p>

                    <form className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <textarea
                                placeholder="Tu mensaje"
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            ></textarea>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
                        >
                            Enviar mensaje
                        </motion.button>
                    </form>

                    <div className="mt-12">
                        <p className="text-gray-600 dark:text-gray-300">
                            También puedes encontrarme en:
                        </p>
                        <div className="flex justify-center space-x-6 mt-4">
                            {/* Aquí puedes agregar tus enlaces a redes sociales */}
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                GitHub
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
