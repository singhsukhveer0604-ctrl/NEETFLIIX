import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">

    
       <div className="navbar-left">
        <h1 className="netflix-logo">NETFLIX</h1>

        
        <ul className="nav-menu">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      
      <div className="navbar-right">

        <span className="search-icon">⌕</span>

        <span className="kids">Kids</span>

        <span className="notification">🔔</span>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="profile"
          />
          <span className="arrow">▼</span>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;