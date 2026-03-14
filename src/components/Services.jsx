import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-textDark" />,
            title: "Full-Stack Development",
            description: "I'll build complete, scalable web applications from scratch tailored to your exact needs.",
            features: [
                "React & Next.js Frontends",
                "Responsive UI/UX",
                "Integration of Stripe & Webhooks",
                "Containerized via Docker"
            ]
        },
        {
            icon: <Server className="w-8 h-8 text-textDark" />,
            title: "Backend & API Architecture",
            description: "Does your application need secure, lightning-fast endpoints to serve thousands of users?",
            features: [
                "RESTful API Development",
                "Node.js & Express Architecture",
                "Role-Based Access Control (JWT)",
                "Under 200ms Query Responses"
            ]
        },
        {
            icon: <Database className="w-8 h-8 text-textDark" />,
            title: "Database Management",
            description: "I provide highly optimized, scalable database schemas tailored for complex datasets.",
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
                    <span className="text-primary font-semibold tracking-wide mb-3 block text-sm">Services</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        I'm Specialized In
                    </h2>
                    <p className="text-textMuted max-w-2xl mx-auto mb-8">
                        Consultation and/or Discovery Meetings are required to determine final costs.
                    </p>
                    <button className="bg-primary hover:bg-primaryDark text-textDark px-8 py-3.5 rounded-xl font-bold transition-all duration-300 text-lg">
                        Explore Packages
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 card-hover"
                        >
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-textMuted mb-8 text-sm leading-relaxed">{service.description}</p>

                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-textMuted text-sm">
                                        <span className="text-[#555] mr-3 mt-1 text-lg leading-none">•</span>
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
