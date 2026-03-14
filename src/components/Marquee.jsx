import React from 'react';

const Marquee = () => {
    const skills = [
        "MERN STACK", "NEXT.JS", "REST APIS", "PYTHON", "C/C++", "DOCKER",
        "JAVASCRIPT", "TYPESCRIPT", "TAILWIND CSS", "MYSQL", "GIT/GITHUB", "POSTGRESQL", "MONGODB"
    ];

    return (
        <div className="bg-primary py-4 overflow-hidden -skew-y-2 relative z-20 my-10 flex">
            <div className="flex whitespace-nowrap animate-marquee w-max">
                {/* Two identical sets of skills to loop seamlessly via -50% translation */}
                {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex items-center text-textDark font-bold tracking-wider text-xl uppercase px-8">
                        <span className="mx-8 font-black text-2xl">•</span> {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
