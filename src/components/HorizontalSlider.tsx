import React, { useRef, useState, useEffect } from 'react';
import ArtCard from './ArtCard';
import { artworks } from '../data/artworks';

const HorizontalSlider: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = artworks.length;
    const itemsPerPage = 4; // Maximum items to show at a time
    const slideWidth = window.innerWidth / itemsPerPage; // Width of each slide item
    const slideHeight = window.innerHeight * 0.5; // 50% of viewport height
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const autoScroll = setInterval(() => {
            if (!isPaused) {
                handleNext();
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(autoScroll);
    }, [currentIndex, isPaused]);

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % totalItems;
        scrollToIndex(newIndex);
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + totalItems) % totalItems;
        scrollToIndex(newIndex);
    };

    const scrollToIndex = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };

    const handleSliderHover = (isHovering: boolean) => {
        setIsPaused(isHovering);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                ref={sliderRef}
                className="flex overflow-x-hidden"
                style={{
                    scrollSnapType: 'x mandatory',
                    width: `${totalItems * slideWidth}px`, // Adjusted width to fit all items
                    height: `${slideHeight}px`,
                    transform: `translateX(-${(currentIndex * slideWidth)}px)`,
                    transition: 'transform 0.5s ease',
                }}
                onMouseEnter={() => handleSliderHover(true)}
                onMouseLeave={() => handleSliderHover(false)}
            >
                {artworks.map((art, index) => (
                    <div
                        key={index}
                        className="flex-none"
                        style={{ width: `${slideWidth}px`, scrollSnapAlign: 'start' }}
                    >
                        <ArtCard
                            title={art.title}
                            imageSrc={art.imageSrc}
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute left-0 bg-primary text-secondary p-2 z-10"
            >
                Prev
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 bg-primary text-secondary p-2 z-10"
            >
                Next
            </button>
        </div>
    );
};

export default HorizontalSlider;
