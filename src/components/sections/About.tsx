'use client';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Sobre Mí
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        Soy un desarrollador multiplataforma con pasión por la tecnología y la innovación. Me especializo en crear soluciones eficientes y escalables, siempre buscando aprender nuevas herramientas y mejorar mis habilidades. Disfruto trabajar en equipo y afrontar nuevos retos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
