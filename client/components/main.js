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
    </div>
  )
}