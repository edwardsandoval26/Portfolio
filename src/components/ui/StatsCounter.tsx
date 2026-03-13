"use client";

import { useEffect, useState, useRef } from "react";

interface StatsCounterProps {
    value: number;
    label: string;
    suffix?: string;
}

export default function StatsCounter({
    value,
    label,
    suffix = "+",
}: StatsCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCount();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const animateCount = () => {
        const duration = 1500;
        const steps = 40;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += 1;
            const progress = current / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));

            if (current >= steps) {
                clearInterval(timer);
                setCount(value);
            }
        }, stepDuration);
    };

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-surface-100 mb-1">
                {count}
                <span className="text-primary-400">{suffix}</span>
            </div>
            <div className="text-sm text-surface-500">{label}</div>
        </div>
    );
}
