import React from 'react';
// import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        // <nav className = "NavBar">
        //     <ul>
        //         <li><NavLink to="/" end>Home</NavLink></li>
        //         <li><NavLink to="/skinquiz">Skin Quiz</NavLink></li>

        //         {/* <li><NavLink to="/results">Results</NavLink></li> */}
        //     </ul>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-*">
    


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-item nav-link active text-white fs-2" href="/">Home </a>
        <a className="nav-item nav-link text-white fs-2" href="/skinquiz">Skin Quiz</a>
        {/* <a className="nav-item nav-link" href="/linkedin.com">Contact</a> */}
        
      </div>
    </div>

    <a className="navbar-brand navbar-right" href="/">
    <img src="https://i.imgur.com/8M6yRV9.png" width="300" height="300" alt=""/>
  </a>
  </nav>

/* <header role="banner">
  <img id="logo-main" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png" width="200" alt="Logo Thing main logo">
<nav id="navbar-primary" className="navbar navbar-default" role="navigation">
  <div className="container-fluid">
  
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-primary-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse" id="navbar-primary-collapse">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>
</header> */

    );

}

export default NavBar;