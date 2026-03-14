import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "Natours - Travel Booking",
            description: "Node, Express, MongoDB, Pug, Stripe, JWT. Backed tour booking app supporting dynamic filtering, pagination, and Stripe payments.",
            image: "/natours.png",
            link: "https://natours-travel-bookings.onrender.com/",
            github: "https://github.com/DarshanPawar17/Natours"
        },
        {
            title: "HireHub - Job Portal",
            description: "MongoDB, Express.js, React.js, Node.js, Docker. RESTful backend handling 3 roles with RBAC and optimized Mongoose queries for 1K+ users.",
            image: "/hirehub.png",
            link: "https://hire-hub-lake.vercel.app/login",
            github: "https://github.com/DarshanPawar17/HireHub"
        },
        {
            title: "Crime And Safety Indicator",
            description: "MERN, Next.js, REST APIs. Crime analytics platform analyzing 10K+ records with <200ms query response using MongoDB aggregation pipelines.",
            image: "/crime_dashboard.png",
            link: "#",
            github: "https://github.com/DarshanPawar17/Crime-Safety-Indicator"
        }
    ];

    return (
        <section id="portfolio" className="py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wide mb-3 block text-sm">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Projects that helped me launch<br />my career are listed below.
                    </h2>
                    <div className="flex justify-center gap-4 mt-8">
                        <button className="bg-primary hover:bg-primaryDark text-textDark px-6 py-2.5 rounded-xl font-bold transition-all duration-300">
                            Client Work
                        </button>
                        <button className="bg-primary hover:bg-primaryDark text-textDark px-6 py-2.5 rounded-xl font-bold transition-all duration-300 opacity-80">
                            Personal Work
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className={`bg-card rounded-3xl overflow-hidden card-hover group ${index === 2 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}
                        >
                            <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex gap-4">
                                        <a href={project.github} className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 text-white"><Github size={20} /></a>
                                        <a href={project.link} className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 text-white"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                                {/* Fallback pattern if image is missing */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2a1b4d] to-[#120a21] -z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback UI if image isn't named exactly as such yet */}
                                <div className="absolute inset-0 flex items-center justify-center -z-10 text-white/30 hidden font-bold text-2xl uppercase tracking-widest text-center px-4">
                                    {project.title}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-textMuted text-sm leading-relaxed">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
