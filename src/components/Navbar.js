import React from 'react'

function Navbar(){
return (
  <>
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        <img
          src={process.env.PUBLIC_URL + "/url.png"}
          width="200"
          height="80"
          alt="icon"
        />
        <span className="head">SHORT-URL</span>
      </span>
    </nav>
  </>
);
}

export default Navbar;