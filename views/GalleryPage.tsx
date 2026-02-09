import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import { Play, Maximize2, X, MapPin } from 'lucide-react';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryItems = [
        {
            id: 1,
            type: 'image',
            src: "https://images.unsplash.com/photo-1544298516-081446732cf0?q=80&w=2670&auto=format&fit=crop",
            caption: "Kampala Skyline at Dusk",
            size: "large"
        },
        {
            id: 2,
            type: 'image',
            src: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=2574&auto=format&fit=crop",
            caption: "Logistics Fleet Operations",
            size: "small"
        },
        {
            id: 3,
            type: 'video',
            src: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=2574&auto=format&fit=crop", // Placeholder for video thumbnail
            caption: "Site Inspection: Albertine Graben",
            size: "small"
        },
        {
            id: 4,
            type: 'image',
            src: "https://images.unsplash.com/photo-1590955559496-5034521d8934?q=80&w=2574&auto=format&fit=crop",
            caption: "Heavy Machinery Transport",
            size: "tall"
        },
        {
            id: 5,
            type: 'image',
            src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2574&auto=format&fit=crop",
            caption: "Agricultural Projects",
            size: "small"
        },
        {
            id: 6,
            type: 'image',
            src: "https://images.unsplash.com/photo-1581093458791-9f302e6d8a6b?q=80&w=2670&auto=format&fit=crop",
            caption: "Civil Engineering Excellence",
            size: "large"
        }
    ];

    return (
        <div className="bg-slate-950 min-h-screen pt-24 pb-24 text-white">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <MotionWrapper>
                    <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-4 block">Visual Journey</span>
                    <h1 className="font-heading font-black text-5xl md:text-7xl mb-6">
                        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-400 to-coral-600">Uganda</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Experience the scale of HSF International's operations and the beauty of the Pearl of Africa.
                    </p>
                </MotionWrapper>
            </div>

            {/* VIRTUAL TOUR SECTION */}
            <section className="max-w-[1920px] mx-auto mb-32 px-4">
                <MotionWrapper variant="scale-up" className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                    <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-start pointer-events-none">
                        <div>
                            <span className="flex items-center gap-2 text-coral-500 font-bold uppercase tracking-widest text-xs mb-1">
                                <MapPin className="w-4 h-4" /> Virtual Tour
                            </span>
                            <h2 className="text-2xl font-bold font-heading">Kampala Aerial View</h2>
                        </div>
                        <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-xs font-bold border border-white/20">
                            360° Panorama
                        </div>
                    </div>

                    {/* Kuula Embed */}
                    <div className="w-full h-[600px] md:h-[800px]">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            src="https://kuula.co/share/post/50TDb?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
                            allow="xr-spatial-tracking; gyroscope; accelerometer"
                            allowFullScreen
                            scrolling="no"
                        ></iframe>
                    </div>
                </MotionWrapper>
            </section>

            {/* GALLERY GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper variant="fade-up" className="mb-12">
                    <h2 className="font-heading font-bold text-3xl mb-2">Project Gallery</h2>
                    <div className="h-1 w-20 bg-coral-500"></div>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {galleryItems.map((item, idx) => (
                        <MotionWrapper
                            key={item.id}
                            delay={idx * 0.1}
                            variant="scale-up"
                            className={`relative group rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-slate-800 ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                    item.size === 'tall' ? 'md:row-span-2' : ''
                                }`}
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-coral-500 text-xs font-bold uppercase tracking-wider mb-1">
                                    {item.type === 'video' ? 'Video Intelligence' : 'Visual Record'}
                                </span>
                                <h3 className="font-bold text-xl">{item.caption}</h3>
                            </div>

                            {/* Icons */}
                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                {item.type === 'video' ? <Play className="w-5 h-5 text-white" /> : <Maximize2 className="w-5 h-5 text-white" />}
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-7xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-coral-500 transition-colors"
                            >
                                <X size={32} />
                            </button>
                            <img src={selectedImage} alt="Gallery Preview" className="max-w-full max-h-[85vh] rounded shadow-2xl" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default GalleryPage;
