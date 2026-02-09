import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Twitter, Instagram, Youtube, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const linkHover = {
        scale: 1.05,
        x: 5,
        color: "#f97316", // Coral-500
        transition: { type: "spring", stiffness: 300 }
    };

    return (
        <footer className="bg-navy-900 text-white pt-16 border-t border-navy-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-coral-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center pb-16 border-b border-navy-700/50 mb-16"
                >
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-heading font-bold text-2xl text-white mb-2">Newsletter</h3>
                        <p className="text-slate-400 text-sm">Sign up for our newsletter to receive the latest news and articles.</p>
                    </div>
                    <div className="flex w-full md:w-auto relative group">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="bg-navy-800 border border-navy-700 text-white px-6 py-4 outline-none w-full md:w-80 text-sm placeholder:text-slate-500 focus:border-coral-500 transition-colors rounded-l-lg"
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-indigo-600 text-white font-bold px-8 py-4 text-sm hover:bg-indigo-500 transition-colors rounded-r-lg flex items-center gap-2"
                        >
                            Subscribe
                            <Send className="w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
                >

                    {/* Logo & Description */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src="/assets/logo-full.jpg"
                                    alt="HSF International"
                                    className="h-12 w-auto object-contain mix-blend-screen"
                                />
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                We are a global contractor-aggregator, bridging international expertise with local execution.
                                Building the future of infrastructure, energy, and logistics.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            {[
                                { Icon: Twitter, link: "#" },
                                { Icon: Instagram, link: "#" },
                                { Icon: Youtube, link: "#" }
                            ].map(({ Icon, link }, i) => (
                                <motion.a
                                    key={i}
                                    href={link}
                                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#ffffff", color: "#f97316" }}
                                    className="w-10 h-10 rounded-full bg-coral-500 flex items-center justify-center text-white transition-all shadow-lg shadow-coral-500/20"
                                >
                                    <Icon className="w-4 h-4 fill-current" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-heading font-bold text-lg text-white mb-8 border-l-4 border-coral-500 pl-4">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Cases/ Projects', path: '/portfolio' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path}>
                                        <motion.div
                                            whileHover={linkHover}
                                            className="text-slate-400 text-xs font-medium inline-block"
                                        >
                                            {item.name}
                                        </motion.div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Useful Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-heading font-bold text-lg text-white mb-8 border-l-4 border-coral-500 pl-4">Useful Links</h4>
                        <ul className="space-y-4">
                            {[
                                'ICT Services',
                                'Financing Services',
                                'Engineering Services',
                                'Oil and Gas Services',
                                'Logistics & Transportation',
                                'Agriculture and Agribusiness',
                                'Tourism (Hospitality and Travel)',
                                'Supply and Maintenance of Motor Vehicles',
                                'Waste Management'
                            ].map((item) => (
                                <li key={item}>
                                    <Link to="/services">
                                        <motion.div
                                            whileHover={linkHover}
                                            className="text-slate-400 text-xs font-medium inline-block"
                                        >
                                            {item}
                                        </motion.div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Work Hours & Contact */}
                    <motion.div variants={itemVariants}>
                        <h4 className="font-heading font-bold text-lg text-white mb-8 border-l-4 border-coral-500 pl-4">Work Hours</h4>

                        <div className="flex items-center gap-3 mb-6 bg-navy-800/50 p-4 rounded-lg border border-navy-700">
                            <Clock className="w-5 h-5 text-coral-500" />
                            <span className="text-slate-300 text-xs font-bold uppercase">8 AM - 5 PM , Monday - Saturday</span>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed mb-8 pl-2 border-l border-navy-700">
                            8th Floor, Aries Towers, 16 Mackinnon Rd, Kampala, Uganda
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-coral-500 text-white font-bold px-8 py-4 text-sm shadow-xl shadow-coral-500/20 hover:bg-white hover:text-coral-500 transition-all w-full rounded-lg"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Call Us Today
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-navy-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p className="text-slate-500 text-[10px] text-center md:text-left">
                            © {new Date().getFullYear()} Copyright - <span className="text-white font-bold">HSF International East Africa</span>. All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="text-slate-600 text-[10px] flex items-center gap-1">
                            Designed and developed by <span className="text-coral-500 font-bold">Ekelot Jesse Jones</span>
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-500 text-[10px] hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-500 text-[10px] hover:text-white transition-colors">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Widget Button (Fixed) */}
            <motion.a
                href="https://wa.me/256700000000" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl z-50 cursor-pointer hover:bg-green-400 transition-colors"
            >
                <MessageCircle className="w-8 h-8 fill-current" />
            </motion.a>

        </footer>
    );
};

export default Footer;
