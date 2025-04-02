import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
import Sidebar from './components/Sidebar';
import MusicList from './components/MusicList';
import Player from './components/Player';
import { musicData } from './data/musicData';

function App() {
  const [activeTab, setActiveTab] = useState('forYou');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTracks, setFilteredTracks] = useState(musicData);
  const [showSidebar, setShowSidebar] = useState(false);
  const audioRef = useRef(new Audio());


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);


  useEffect(() => {
    const storedRecentlyPlayed = JSON.parse(sessionStorage.getItem('recentlyPlayed')) || [];
    setRecentlyPlayed(storedRecentlyPlayed);
  }, []);


  useEffect(() => {
    if (currentTrack) {
      audioRef.current.src = currentTrack.musicUrl;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
         
        });
      } else {
        audioRef.current.pause();
      }
    }
    return () => {
      audioRef.current.pause();
    };
  }, [currentTrack, isPlaying]);

  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredTracks(musicData);
    } else {
      const filtered = musicData.filter(track => 
        track.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTracks(filtered);
    }
  }, [searchTerm]);


  const updateRecentlyPlayed = (track) => {
    const updatedRecentlyPlayed = [track, ...recentlyPlayed.filter(t => t.id !== track.id)]
      .slice(0, 10);
    setRecentlyPlayed(updatedRecentlyPlayed);
    sessionStorage.setItem('recentlyPlayed', JSON.stringify(updatedRecentlyPlayed));
  };


  const toggleFavorite = (trackId) => {
    let updatedFavorites;
    if (favorites.some(track => track.id === trackId)) {
      updatedFavorites = favorites.filter(track => track.id !== trackId);
    } else {
      const trackToAdd = musicData.find(track => track.id === trackId);
      updatedFavorites = [...favorites, trackToAdd];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  
  const handleTrackSelect = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    updateRecentlyPlayed(track);
  };

  
  const getTracksForActiveTab = () => {
    switch (activeTab) {
      case 'favorites':
        return favorites;
      case 'recentlyPlayed':
        return recentlyPlayed;
      default:
        return filteredTracks;
    }
  };

  return (
    <div 
      className="app min-vh-100 d-flex flex-column" 
      style={{
        background: currentTrack 
          ? `linear-gradient(to bottom, ${currentTrack.color}, #121212)`
          : 'linear-gradient(to bottom, #404040, #121212)',
        transition: 'background 0.5s ease',
        color: 'white'
      }}
    >
      <Container fluid className="flex-grow-1 d-flex flex-column p-0">
        <Row className="flex-grow-1 m-0">
          <Col 
            md={3} 
            className={`sidebar-container p-0 bg-dark bg-opacity-25 ${showSidebar ? 'show' : 'd-none d-md-block'}`}
            style={{ maxWidth: '250px' }}
          >
            <Sidebar
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              toggleSidebar={() => setShowSidebar(false)}
            />
          </Col>
          <Col className="content-container p-3 overflow-auto">
            <MusicList
              tracks={getTracksForActiveTab()}
              currentTrack={currentTrack}
              onTrackSelect={handleTrackSelect}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              activeTab={activeTab}
              toggleSidebar={() => setShowSidebar(true)}
            />
          </Col>
        </Row>
        <Row className="player-container m-0 bg-dark bg-opacity-25" style={{ height: '90px' }}>
          <Col>
            <Player
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
              onNextTrack={() => {
                const tracks = getTracksForActiveTab();
                const currentIndex = tracks.findIndex(track => track.id === currentTrack?.id);
                if (currentIndex !== -1 && currentIndex < tracks.length - 1) {
                  handleTrackSelect(tracks[currentIndex + 1]);
                }
              }}
              onPrevTrack={() => {
                const tracks = getTracksForActiveTab();
                const currentIndex = tracks.findIndex(track => track.id === currentTrack?.id);
                if (currentIndex > 0) {
                  handleTrackSelect(tracks[currentIndex - 1]);
                }
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;