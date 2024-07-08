import React, { useState } from 'react';
import Navbar from './Navbar';
import HorizontalSlider from './HorizontalSlider';
import { artworks } from '../data/artworks';
import ArtCard from './ArtCard';

const Gallery: React.FC = () => {
    const [view, setView] = useState<'grid' | 'carousel'>('grid');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleViewChange = (view: 'grid' | 'carousel') => {
        setView(view);
    };

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
    };

    return (
        <div className={`${isDarkMode ? 'dark' : 'light'}`}>
            <Navbar
                onViewChange={handleViewChange}
                onThemeToggle={handleThemeToggle}
                isDarkMode={isDarkMode}
            />
            <div className="p-4">
                {view === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {artworks.map((art, index) => (
                            <ArtCard key={index} title={art.title} imageSrc={art.imageSrc} />
                        ))}
                    </div>
                ) : (
                    <HorizontalSlider />
                )}
            </div>
        </div>
    );
};

export default Gallery;
