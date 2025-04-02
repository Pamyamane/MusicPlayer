import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import MusicCard from './MusicCard';
import { FaBars } from 'react-icons/fa';

const MusicList = ({ 
  tracks, 
  currentTrack, 
  onTrackSelect, 
  favorites, 
  toggleFavorite,
  activeTab,
  toggleSidebar
}) => {
  const getTitle = () => {
    switch (activeTab) {
      case 'favorites':
        return 'Favorites';
      case 'recentlyPlayed':
        return 'Recently Played';
      case 'topTracks':
        return 'Top Tracks';
      default:
        return 'For You';
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <Button 
          variant="link" 
          className="d-md-none me-2 p-0 text-white" 
          onClick={toggleSidebar}
        >
          <FaBars size={20} />
        </Button>
        <h2 className="fw-bold m-0">{getTitle()}</h2>
      </div>
      
      <Row className="g-4">
        {tracks.length > 0 ? (
          tracks.map(track => (
            <Col xs={6} sm={4} md={3} lg={2} key={track.id}>
              <MusicCard
                track={track}
                isPlaying={currentTrack?.id === track.id}
                onTrackSelect={() => onTrackSelect(track)} 
                isFavorite={favorites.some(fav => fav.id === track.id)}
                toggleFavorite={() => toggleFavorite(track.id)}
              />
            </Col>
          ))
        ) : (
          <Col className="text-center py-5 text-white-50">
            {activeTab === 'favorites' 
              ? "No favorite tracks yet. Mark some tracks as favorite!"
              : activeTab === 'recentlyPlayed'
                ? "No tracks played recently."
                : "No tracks found."}
          </Col>
        )}
      </Row>
      
      {currentTrack && (
        <Row className="mt-5">
          <Col md={6}>
            <h3 className="fw-bold">{currentTrack.title}</h3>
            <p className="text-white-50">{currentTrack.artistName}</p>
            <div style={{ maxWidth: '300px' }}>
              <img 
                src={currentTrack.thumbnail} 
                alt={currentTrack.title} 
                className="img-fluid rounded shadow"
              />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default MusicList;
