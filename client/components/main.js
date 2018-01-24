import React from 'react';
import { NavBar, Player, About } from './index';

export const Main = (props) => {

  return (
    <div className="app">
      <NavBar/>
      <div className="main">
        <About/>
        <Player/>
      </div>
      <div className="footer">
      <h3>Contact: mattbsohn@gmail.com</h3>
      </div>
    </div>
  )
}