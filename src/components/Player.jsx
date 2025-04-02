import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { 
  FaPlay, 
  FaPause, 
  FaStepBackward, 
  FaStepForward, 
  FaVolumeUp 
} from 'react-icons/fa';

const Player = ({ 
  currentTrack, 
  isPlaying, 
  setIsPlaying, 
  audioRef,
  onNextTrack,
  onPrevTrack
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audio = audioRef.current;
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.volume = volume;
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audioRef, volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleSeek = (e) => {
    const seekTo = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTo;
    setCurrentTime(seekTo);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="h-100 d-flex align-items-center">
      {currentTrack ? (
        <Row className="w-100 align-items-center">
          <Col xs={4} md={3} className="d-flex align-items-center">
            <Image 
              src={currentTrack.thumbnail} 
              alt={currentTrack.title}
              width={56} 
              height={56}
              className="rounded me-3" 
            />
            <div>
              <div className="fw-bold text-truncate">{currentTrack.title}</div>
              <div className="text-white-50 small">{currentTrack.artistName}</div>
            </div>
          </Col>
          
          <Col xs={8} md={6} className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center mb-2">
              <Button variant="link" className="text-white-50 p-0" onClick={onPrevTrack}>
                <FaStepBackward />
              </Button>
              <Button 
                variant="light" 
                className="mx-3 rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '36px', height: '36px' }}
                onClick={handlePlayPause}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </Button>
              <Button variant="link" className="text-white-50 p-0" onClick={onNextTrack}>
                <FaStepForward />
              </Button>
            </div>
            
            <div className="d-flex align-items-center w-100">
              <span className="text-white-50 small me-2">{formatTime(currentTime)}</span>
              <input
                type="range"
                className="form-range flex-grow-1"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
              />
              <span className="text-white-50 small ms-2">{formatTime(duration)}</span>
            </div>
          </Col>
          
          <Col md={3} className="d-none d-md-flex align-items-center justify-content-end">
            <FaVolumeUp className="text-white-50 me-2" />
            <input
              type="range"
              className="form-range"
              style={{ width: '100px' }}
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </Col>
        </Row>
      ) : (
        <div className="w-100 text-center text-white-50">
          <p className="m-0">No track selected</p>
        </div>
      )}
    </div>
  );
};

export default Player;