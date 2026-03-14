import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            value: "500+",
            label: "DSA Problems Solved",
            subLabel: "LeetCode & GFG",
            color: "from-blue-400 to-indigo-500",
            shadow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]",
            border: "hover:border-indigo-500/50"
        },
        {
            value: "15%",
            label: "Top Global LeetCode",
            subLabel: "Contest Rating: 1650+",
            color: "from-yellow-400 to-orange-500",
            shadow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]",
            border: "hover:border-orange-500/50"
        },
        {
            value: "GSoC",
            label: "Open Source Contributor",
            subLabel: "Google Girl Summer of Code",
            color: "from-emerald-400 to-teal-500",
            shadow: "hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]",
            border: "hover:border-teal-500/50"
        },
        {
            value: "Freelance",
            label: "Web Designer",
            subLabel: "Outlier Platform",
            color: "from-purple-400 to-pink-500",
            shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]",
            border: "hover:border-purple-500/50"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wide mb-3 block text-sm">What I've Done</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        My Little Achievements
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className={`bg-card/40 backdrop-blur-sm rounded-3xl p-12 text-center flex flex-col items-center justify-center border border-white/5 transition-all duration-500 group hover:-translate-y-2 ${stat.shadow} ${stat.border} relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}></div>

                            <h3 className={`text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-4 tracking-tighter group-hover:${stat.color} transition-all duration-500 drop-shadow-lg`}>
                                {stat.value}
                            </h3>
                            <p className="text-xl font-medium text-white group-hover:text-white/90 mb-2 transition-colors duration-300">{stat.label}</p>
                            <p className="text-sm text-textMuted group-hover:text-white/70 transition-colors duration-300">{stat.subLabel}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Let's build a successful backend CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 bg-card rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden border border-white/5 hover:border-primary/30 transition-colors duration-500 group shadow-2xl"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10"></div>

                    <span className="text-primary font-semibold tracking-wide mb-4 block text-sm uppercase tracking-widest relative z-10">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                        Let's connect for new <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">opportunities</span> & collaborations.
                    </h2>
                    <button
                        onClick={() => window.location.href = 'mailto:pawardarshan987@gmail.com'}
                        className="bg-primary hover:bg-white text-textDark hover:text-primary px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(169,154,248,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] relative z-10 transform hover:-translate-y-1"
                    >
                        Contact Me Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
