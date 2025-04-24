import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FavClubs from './pages/FavClubs';
import ClubDetail from './pages/ClubDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FavClubs />} />
          <Route path="/fav-clubs" element={<FavClubs />} />
          <Route path="/home" element={<div>Home Placeholder</div>} />
          <Route path="/calendar" element={<div>Calendar Placeholder</div>} />
          <Route path="/messages" element={<div>Messages Placeholder</div>} />
          <Route path="/search" element={<div>Search Clubs Placeholder</div>} />
          <Route path="/club/:id" element={<ClubDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
