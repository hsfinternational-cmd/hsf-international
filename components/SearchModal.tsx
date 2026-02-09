import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight, FileText, Briefcase, Users, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const searchableContent = [
    { title: "Home", path: "/", category: "Page", icon: FileText },
    { title: "About Us", path: "/about", category: "Page", icon: Users },
    { title: "Services Overview", path: "/services", category: "Page", icon: Briefcase },
    { title: "Energy & Oil/Gas", path: "/services/energy-oil-gas", category: "Service", icon: Briefcase },
    { title: "Logistics & Fleet", path: "/services/logistics-fleet", category: "Service", icon: Briefcase },
    { title: "ICT & Security", path: "/services/ict-security", category: "Service", icon: Briefcase },
    { title: "Civil Engineering", path: "/services/civil-engineering", category: "Service", icon: Briefcase },
    { title: "Contact Us", path: "/contact", category: "Page", icon: Phone },
    { title: "Portfolio / Cases", path: "/portfolio", category: "Page", icon: Briefcase },
    { title: "Chairman's Profile", path: "/chairman", category: "Page", icon: Users },
    { title: "Gallery & Virtual Tour", path: "/gallery", category: "Page", icon: FileText },
    { title: "Media & News", path: "/media", category: "Page", icon: FileText },
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(searchableContent);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.trim() === '') {
            setResults(searchableContent);
        } else {
            const filtered = searchableContent.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        }
    }, [query]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    const handleNavigation = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-navy-950/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Search Input */}
                    <div className="flex items-center border-b border-slate-100 p-6 bg-white">
                        <Search className="text-coral-500 w-6 h-6 mr-4" />
                        <input
                            type="text"
                            placeholder="Search services, pages, or resources..."
                            className="w-full text-xl text-navy-900 placeholder:text-slate-300 outline-none font-bold"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                        />
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <X className="text-slate-400 w-6 h-6" />
                        </button>
                    </div>

                    {/* Results List */}
                    <div className="max-h-[60vh] overflow-y-auto p-4 bg-slate-50">
                        {results.length > 0 ? (
                            <div className="grid gap-2">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-4">
                                    {query ? 'Search Results' : 'Quick Links'}
                                </h3>
                                {results.map((item, idx) => (
                                    <motion.button
                                        key={idx}
                                        whileHover={{ scale: 1.01, x: 4 }}
                                        onClick={() => handleNavigation(item.path)}
                                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-coral-500/30 hover:shadow-md transition-all group w-full text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-navy-900 group-hover:bg-coral-500 group-hover:text-white transition-colors">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-navy-900 group-hover:text-coral-500 transition-colors">{item.title}</h4>
                                                <span className="text-xs text-slate-400 font-medium uppercase">{item.category}</span>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-coral-500 transition-colors" />
                                    </motion.button>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-slate-400 font-medium">No results found for "{query}"</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-100 p-3 text-center border-t border-slate-200">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            Press ESC to close
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SearchModal;
