import React, { useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface MotionWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
    duration?: number;
    viewportOnce?: boolean;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
    children,
    className = "",
    delay = 0,
    variant = 'fade-up',
    duration = 0.6,
    viewportOnce = true
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: viewportOnce, margin: "-100px" });

    const variants = {
        'fade-up': {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        'scale-up': {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
        },
        'slide-left': {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        'slide-right': {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant] as any} // variant typing is tricky with dynamic keys
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }: { children: React.ReactNode, className?: string, staggerDelay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
