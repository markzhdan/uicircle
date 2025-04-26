// import "./App.css";
// import Layout from "./components/Layout";
// import MainPage from "./pages/MainPage";
// import Messages from "./pages/Messages";
// import splash from "./assets/UICircle_Full.png";
// import MainPage from "./pages/MainPage";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <img src={splash} alt="UICircle splash logo" height={300} width={400} />
//       <MainPage />
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import React from 'react';
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import Messages from "./pages/Messages";
import FavClubs from './pages/FavClubs';
import ClubDetail from './pages/ClubDetail';
import Interests from './pages/Interests';







function App() {
  return (
    <Router>
      <div className="App">
        {/* iPhone layout here */}
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/fav-clubs" element={<FavClubs />} />
            <Route path="/messages" element ={<Messages />} />
            <Route path="/club/:id" element={<ClubDetail />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
        </Layout>
      </div>
    </Router>

  );
}

export default App;