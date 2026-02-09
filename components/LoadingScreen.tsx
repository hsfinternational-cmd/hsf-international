import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
    onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 3000); // 3 seconds loading time

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <div className="relative">
                        {/* Pulse Effect */}
                        <motion.div
                            className="absolute inset-0 bg-coral-500 rounded-full blur-2xl opacity-20"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Logo Symbol */}
                        <motion.img
                            src="/assets/logo-symbol.png"
                            alt="HSF Loading"
                            className="w-32 h-auto relative z-10 object-contain mix-blend-screen"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>

                    {/* Progress Bar */}
                    <motion.div className="mt-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-coral-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                        />
                    </motion.div>

                    <motion.div
                        className="mt-4 text-white/50 text-xs font-bold uppercase tracking-[0.2em]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        International
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
