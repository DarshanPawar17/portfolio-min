import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-white" />,
            title: "Full-Stack Development",
            description: "I'll build complete, scalable web applications from scratch tailored to your exact needs.",
            color: "from-blue-500 to-indigo-600",
            shadow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]",
            border: "group-hover:border-indigo-500/50",
            features: [
                "React & Next.js Frontends",
                "Responsive UI/UX",
                "Integration of Stripe & Webhooks",
                "Containerized via Docker"
            ]
        },
        {
            icon: <Server className="w-8 h-8 text-white" />,
            title: "Backend Architecture",
            description: "Designing fast, secure, and scalable RESTful APIs with efficient data processing.",
            color: "from-emerald-400 to-cyan-600",
            shadow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]",
            border: "group-hover:border-emerald-500/50",
            features: [
                "Node.js & Express Frameworks",
                "Authentication & Authorization (JWT)",
                "Microservices & Docker containerization",
                "Performance optimization (<200ms loads)"
            ]
        },
        {
            icon: <Database className="w-8 h-8 text-white" />,
            title: "Database Management",
            description: "I provide highly optimized, scalable database schemas tailored for complex datasets.",
            color: "from-rose-400 to-orange-500",
            shadow: "hover:shadow-[0_0_40px_rgba(251,113,133,0.2)]",
            border: "group-hover:border-rose-500/50",
            features: [
                "MongoDB Aggregation Pipelines",
                "Complex PostgreSQL / MySQL Queries",
                "Index Optimization",
                "Schema Design for 1M+ Records"
            ]
        }
    ];

    return (
        <section id="specialties" className="py-24 bg-background relative">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wide mb-3 block text-sm">Core Proficiencies</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Technical Expertise
                    </h2>
                    <p className="text-textMuted max-w-2xl mx-auto mb-8">
                        Combining strong Academic Foundations (OS, DBMS, CN, OOPS) with modern full-stack development frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass p-8 rounded-2xl border border-white/5 transition-all duration-500 group hover:-translate-y-2 ${service.shadow} ${service.border} relative overflow-hidden bg-card/40 hover:bg-card/80`}
                        >
                            {/* Animated Background Glow */}
                            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-700 rounded-full z-0`}></div>

                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                                {service.title}
                            </h3>
                            <p className="text-textMuted mb-8 text-sm leading-relaxed relative z-10">
                                {service.description}
                            </p>

                            <ul className="space-y-3 relative z-10">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-textMuted text-sm group-hover:text-white/90 transition-colors duration-300">
                                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.color} mr-3 mt-1 text-lg leading-none font-bold`}>•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
