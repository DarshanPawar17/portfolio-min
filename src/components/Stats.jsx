import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            value: "500+",
            label: "DSA Problems Solved",
            subLabel: "LeetCode, GFG, Codeforces"
        },
        {
            value: "Top 15%",
            label: "Global LeetCode Rank",
            subLabel: "Contest Rating: 1650+"
        },
        {
            value: "10K+",
            label: "Records Processed",
            subLabel: "with < 200ms query response"
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="bg-card rounded-3xl p-12 text-center flex flex-col items-center justify-center card-hover"
                        >
                            <h3 className="text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tighter">
                                {stat.value}
                            </h3>
                            <p className="text-xl font-medium text-textLight mb-2">{stat.label}</p>
                            <p className="text-sm text-textMuted">{stat.subLabel}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Let's build a successful backend CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 bg-card rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden"
                >
                    <span className="text-primary font-semibold tracking-wide mb-4 block text-sm">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
                        Let's build a successful <br /> backend architecture together.
                    </h2>
                    <button
                        onClick={() => window.location.href = 'mailto:pawardarshan987@gmail.com'}
                        className="bg-primary hover:bg-primaryDark text-textDark px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                    >
                        Contact Me Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
