import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Twitter, Instagram, Youtube, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-800">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-16 border-b border-navy-700/50 mb-16">
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-heading font-bold text-2xl text-white mb-2">Newsletter</h3>
                        <p className="text-slate-400 text-sm">Sign up for our newsletter to receive the latest news and articles.</p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="bg-white text-navy-900 px-6 py-4 outline-none w-full md:w-80 text-sm placeholder:text-slate-400"
                        />
                        <button className="bg-indigo-600 text-white font-bold px-8 py-4 text-sm hover:bg-indigo-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Brand & Social */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="text-coral-500 font-heading font-black text-3xl leading-none">H</div>
                            <span className="text-coral-500 font-bold text-xs tracking-[0.2em] uppercase">HSF INTERNATIONAL</span>
                        </Link>
                        <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                            HSF International excels in diverse industries, offering expert consulting and services. We bridge business gaps, ensuring efficiency and success.
                        </p>
                        <div className="flex gap-3">
                            {[Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-coral-500 flex items-center justify-center text-white hover:bg-white hover:text-coral-500 transition-all">
                                    <Icon className="w-4 h-4 fill-current" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg text-white mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Cases/ Projects', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-slate-400 hover:text-coral-500 text-xs font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg text-white mb-8">Useful Links</h4>
                        <ul className="space-y-4">
                            {['ICT Services', 'Financing Services', 'Engineering Services', 'Oil and Gas Services', 'Logistics & Transportation', 'Agriculture and Agribusiness', 'Tourism (Hospitality and Travel)', 'Supply and Maintenance of Motor Vehicles', 'Waste Management'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-slate-400 hover:text-coral-500 text-xs font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Work Hours & Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-lg text-white mb-8">Work Hours</h4>

                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="w-4 h-4 text-coral-500" />
                            <span className="text-slate-400 text-xs font-bold uppercase">8 AM - 5 PM , Monday - Saturday</span>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed mb-8">
                            8th Floor, Aries Towers, 16 Mackinnon Rd, Kampala, Uganda
                        </p>

                        <button className="bg-coral-500 text-white font-bold px-8 py-4 text-sm shadow-lg shadow-coral-500/20 hover:bg-white hover:text-coral-500 transition-all">
                            Call Us Today
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-[10px] mb-4 md:mb-0">
                        © {new Date().getFullYear()} Copyright - HSF International. All Rights Reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-slate-500 text-[10px] hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-slate-500 text-[10px] hover:text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
