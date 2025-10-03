'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const targetDate = new Date('Dec 31, 2026 23:59:59').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days.toString().padStart(2, '0'),
                    hours: hours.toString().padStart(2, '0'),
                    minutes: minutes.toString().padStart(2, '0'),
                    seconds: seconds.toString().padStart(2, '0')
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[url('/image/coming-soon-page-bg.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Back to Home button */}
            <Link
                href="/"
                className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg transition"
            >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back Home</span>
            </Link>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-transparent text-[60px] sm:text-[80px] font-bold uppercase tracking-widest [-webkit-text-stroke:1px_white]">
                    We're Coming Soon...
                </h1>

                {/* Timer */}
                <div className="flex flex-wrap justify-center gap-6 mt-10 mb-10">
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds }
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] border border-white/30 rounded-full flex flex-col items-center justify-center"
                        >
                            <span className="text-white text-3xl sm:text-4xl font-bold">
                                {item.value}
                            </span>
                            <span className="text-white text-lg font-semibold">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Paragraph */}
                <p className="text-white text-lg leading-relaxed">
                    Website is under construction. We'll be here soon with new
                    <br /> awesome site, Subscribe to be notified.
                </p>

                {/* Subscribe Form */}
                <div className="mt-6 max-w-2xl mx-auto">
                    <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full sm:w-[32rem] h-[60px] px-6 text-gray-200 text-base bg-gray-900 border border-gray-600 outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
