import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <div className="container">
      <div className="iphone-container">
        <div className="dynamic-island"></div>
        <div className="content">
          <Outlet />
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
}

export default Layout;
