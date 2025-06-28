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
            Soy desarrollador de software multiplataforma especializado en crear
            soluciones innovadoras y eficientes. Me apasiona la tecnología, el
            desarrollo de aplicaciones modernas y el aprendizaje continuo de nuevas
            herramientas y frameworks. Disfruto afrontar retos técnicos, trabajar
            en equipo y aportar valor real a los proyectos en los que participo.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Mi enfoque está en el desarrollo multiplataforma (Android, escritorio,
            web), la calidad del código y la mejora constante de mis habilidades
            técnicas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
