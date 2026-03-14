import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const LeetCodeIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.956-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382h-10.173z" />
    </svg>
);

const GfgIcon = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm-3.834 16.963c-2.459 0-4.453-1.996-4.453-4.453s1.994-4.453 4.453-4.453c1.17 0 2.233.454 3.033 1.196l-1.389 1.389c-.439-.379-.99-.606-1.583-.606-1.18 0-2.138.958-2.138 2.138 0 1.18.958 2.138 2.138 2.138.835 0 1.55-.478 1.905-1.164h-1.992v-1.758h4.086c.071.396.113.805.113 1.228 0 2.37-1.892 4.298-4.241 4.341l-.042.003-4.453-4.453zm11.233.003c-2.459 0-4.453-1.996-4.453-4.453s1.994-4.453 4.453-4.453c1.17 0 2.233.454 3.033 1.196l-1.389 1.389c-.439-.379-.99-.606-1.583-.606-1.18 0-2.138.958-2.138 2.138 0 1.18.958 2.138 2.138 2.138.835 0 1.55-.478 1.905-1.164h-1.992v-1.758h4.086c.071.396.113.805.113 1.228 0 2.37-1.892 4.298-4.241 4.341l-.042.003-4.453-4.453z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-background py-16">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center items-center gap-4 md:gap-6 mb-8 flex-wrap">
                    <a href="https://github.com/DarshanPawar17" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/darshan-jagdish-pawar-9b9701298" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://leetcode.com/u/Darshan_Pawar_17/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <LeetCodeIcon size={20} />
                    </a>
                    <a href="https://www.geeksforgeeks.org/profile/pawardar98mt?tab=activity" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <GfgIcon size={20} />
                    </a>
                    <a href="mailto:pawardarshan987@gmail.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                        <Mail size={20} />
                    </a>
                </div>

                <p className="text-textMuted text-sm">
                    © {new Date().getFullYear()} Darshan Pawar. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
