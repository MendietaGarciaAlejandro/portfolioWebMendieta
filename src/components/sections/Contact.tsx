'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');
        try {
            const res = await fetch('https://formspree.io/f/xrbkrjkz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setErrorMsg('No se pudo enviar el mensaje. Intenta de nuevo.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Error de red. Intenta más tarde.');
        }
    };

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

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                                value={form.name}
                                onChange={handleChange}
                                disabled={status === 'sending'}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                                value={form.email}
                                onChange={handleChange}
                                disabled={status === 'sending'}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <textarea
                                name="message"
                                placeholder="Tu mensaje"
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                                value={form.message}
                                onChange={handleChange}
                                disabled={status === 'sending'}
                            ></textarea>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto disabled:opacity-60"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                        </motion.button>
                        {status === 'success' && (
                            <p className="text-green-600 dark:text-green-400 mt-2">¡Mensaje enviado correctamente!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 dark:text-red-400 mt-2">{errorMsg}</p>
                        )}
                    </form>

                    <div className="mt-12">
                        <p className="text-gray-600 dark:text-gray-300">
                            También puedes encontrarme en:
                        </p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <a
                                href="https://www.linkedin.com/in/alejandro-mendieta-garc%C3%ADa-9b6a30238/"
                                className="transition-transform duration-200 hover:scale-125 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                target="_blank" rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/MendietaGarciaAlejandro"
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                target="_blank" rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="/CV_MendietaGarciaAlejandroJunio2025.pdf"
                                download
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
