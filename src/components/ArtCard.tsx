import React from 'react';

interface ArtCardProps {
  title: string;
  imageSrc: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ title, imageSrc, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden m-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={imageSrc}
        alt={`Artwork: ${title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default ArtCard;
