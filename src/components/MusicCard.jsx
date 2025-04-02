import React from 'react';
import { Card, Button, Overlay, Tooltip } from 'react-bootstrap';
import { FaPlay, FaPause, FaEllipsisH, FaHeart, FaRegHeart } from 'react-icons/fa';

const MusicCard = ({ 
  track, 
  isPlaying, 
  onTrackSelect, 
  isFavorite, 
  toggleFavorite 
}) => {
  return (
    <>
     <Card 
      className={`h-100 ${isPlaying ? 'border-success' : 'border-0'}`} 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        cursor: 'pointer'
      }}
    >
      <div 
        className="position-relative" 
        onClick={onTrackSelect}
      >
        <Card.Img 
          variant="top" 
          src={track.thumbnail} 
          alt={track.title}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ 
            background: 'rgba(0, 0, 0, 0.4)',
            opacity: isPlaying ? 1 : 0,
            transition: 'opacity 0.2s',
            borderRadius: 'calc(0.375rem - 1px)'
          }}
        >
          {isPlaying ? 
            <FaPause className="text-white" size={30} /> : 
            <FaPlay className="text-white" size={30} />
          }
        </div>
      </div>
      <Card.Body className="p-2">
        <Card.Title 
          className={`h6 text-truncate mb-1 ${isPlaying ? 'text-success' : 'text-white'}`}
        >
          {track.title}
        </Card.Title>
        <Card.Text className="text-white-50 small mb-1 text-truncate">
          {track.artistName}
        </Card.Text>
        <Card.Text className="text-white-50 small">
          {track.duration}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 p-2 d-flex justify-content-between">
        <Button 
          variant="link" 
          className="p-0" 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
        >
          {isFavorite ? 
            <FaHeart className="text-success" /> : 
            <FaRegHeart className="text-white-50" />
          }
        </Button>
        <Button 
          variant="link" 
          className="p-0 text-white-50"
        >
          <FaEllipsisH />
        </Button>
      </Card.Footer>
    </Card>
    </>
   
  );
};

export default MusicCard;