import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-gold-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Address */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="bg-gold-500 w-8 h-8 flex items-center justify-center mr-3 font-heading font-black text-xl text-navy-900 rounded-sm">H</div>
                            <div className="flex flex-col font-heading">
                                <span className="text-lg font-bold leading-none tracking-widest text-white">HSF</span>
                                <span className="text-[0.5rem] tracking-[0.2em] font-medium text-gold-500">INTERNATIONAL</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 text-slate-300">
                            <MapPin className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">
                                8th Floor, Aries Towers<br />
                                Mackinnon Road, Nakasero<br />
                                Kampala, Uganda
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                            <p className="text-sm">+256 393 000 578</p>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-gold-500 pl-4">Capabilities</h4>
                        <ul className="space-y-3">
                            {['Energy & Oil/Gas', 'Automotive & Fleet', 'ICT & Cyber-Sovereignty', 'Civil Engineering', 'Medical Logistics'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-slate-300 hover:text-gold-500 text-sm flex items-center transition-colors">
                                        <ChevronRight className="w-3 h-3 mr-2" /> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compliance & Partners */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-gold-500 pl-4">Compliance</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {['PPDA Registered', 'NSSF Compliant', 'URA TCC', 'ISO 9001:2015'].map((cert) => (
                                <div key={cert} className="flex items-center gap-2 text-xs text-slate-400 border border-slate-700 p-2 rounded bg-navy-800">
                                    <ShieldCheck className="w-3 h-3 text-gold-500" /> {cert}
                                </div>
                            ))}
                        </div>
                        <h4 className="font-heading font-bold text-lg mt-8 mb-4 text-white">Strategic Partners</h4>
                        <div className="text-sm text-slate-300">
                            <span className="block mb-1">• Dongrui Electric Group (China)</span>
                            <span className="block mb-1">• World Navi (Japan)</span>
                            <span className="block">• SIPA (Italy)</span>
                        </div>
                    </div>

                    {/* Quick Contact / Newsletter */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-gold-500 pl-4">Connect</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe for sovereign capability insights.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Corporate Email"
                                className="bg-navy-800 border-slate-700 text-white text-sm p-3 rounded-sm w-full focus:outline-none focus:border-gold-500"
                            />
                            <button className="bg-gold-500 text-navy-900 font-bold px-4 rounded-sm hover:bg-white transition-colors">
                                GO
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} HSF International Limited. Reg No: 80020003583205. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gold-500">Privacy Policy</a>
                        <a href="#" className="hover:text-gold-500">Terms of Governance</a>
                        <a href="#" className="hover:text-gold-500">Sovereign Insights</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
