import React from 'react';
import { Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { FaSpotify, FaSearch, FaTimes } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab, searchTerm, setSearchTerm, toggleSidebar }) => {
  return (
    <div className="h-100 d-flex flex-column p-3">
      <div className="d-flex align-items-center mb-4">
        <FaSpotify className="text-success" size={32} />
        <span className="ms-2 fw-bold fs-4">Spotify</span>
        <Button 
          variant="link" 
          className="ms-auto d-md-none text-white p-0" 
          onClick={toggleSidebar}
        >
          <FaTimes />
        </Button>
      </div>
      
      <InputGroup className="mb-4">
        <InputGroup.Text className="bg-dark border-0 text-muted">
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search Song, Artist"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-dark border-0 text-white"
        />
      </InputGroup>
      
      <Nav className="flex-column" variant="pills">
        <Nav.Link 
          active={activeTab === 'forYou'} 
          onClick={() => setActiveTab('forYou')}
          className="text-white-50 mb-2"
        >
          For You
        </Nav.Link>
        <Nav.Link 
          active={activeTab === 'topTracks'} 
          onClick={() => setActiveTab('topTracks')}
          className="text-white-50 mb-2"
        >
          Top Tracks
        </Nav.Link>
        <Nav.Link 
          active={activeTab === 'favorites'} 
          onClick={() => setActiveTab('favorites')}
          className="text-white-50 mb-2"
        >
          Favorites
        </Nav.Link>
        <Nav.Link 
          active={activeTab === 'recentlyPlayed'} 
          onClick={() => setActiveTab('recentlyPlayed')}
          className="text-white-50 mb-2"
        >
          Recently Played
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;