import React from 'react';


function NavBar(){
    return (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-*">
    


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-item nav-link active text-white fs-2" href="/">Home </a>
        <a className="nav-item nav-link text-white fs-2" href="/skinquiz">Skin Quiz</a>
       
        
      </div>
    </div>

    <a className="navbar-brand navbar-right" href="/">
    <img src="https://i.imgur.com/8M6yRV9.png" width="300" height="300" alt=""/>
    </a>
  </nav>

    );

}

export default NavBar;