import React from 'react'

function Navbar(){
return (
  <>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={process.env.PUBLIC_URL + "/url.png"}
          width="200"
          height="80"
          alt="icon"
        />
        <span className="head">SHORT-URL</span>
      </a>
    </nav>
  </>
);
}

export default Navbar;