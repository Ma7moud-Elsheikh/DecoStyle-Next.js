import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface ZoomImageProps {
    src: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src }) => {
    const imgRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({
        transform: 'scale(1)',
        transformOrigin: 'center center',
        transition: 'transform 0.3s ease'
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!imgRef.current) return;
        const rect = imgRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setStyle({
            transform: 'scale(1.5)',
            transformOrigin: `${x}% ${y}%`,
            transition: 'transform 0.1s ease-out'
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'scale(1)',
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease'
        });
    };

    return (
        <div ref={imgRef} className="w-full h-full cursor-zoom-in" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={style}>
            <Image src={src} alt="Zoomed Product" width={1000} height={800} className="w-full h-full object-cover" />
        </div>
    );
};

export default ZoomImage;
