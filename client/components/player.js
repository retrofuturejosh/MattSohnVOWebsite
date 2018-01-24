import React from 'react';
import { Audio } from './index'

export const Player = (props) => {

  return (
    <div className="Audio">
      <div className="Audio-Examples">
        <div className="Audio-Examples-Title">
          Pride and Prejudice
        </div>
        <Audio mp3="/audio/Pride and Prejudice.mp3" />
      </div>
      <div className="Audio-Examples">
        <div className="Audio-Examples-Title">
          Test
        </div>
        <Audio mp3="/audio/Test Cut.mp3" />
      </div>
      <div className="Audio-Examples">
        <div className="Audio-Examples-Title">
          Podcast
        </div>
        <Audio mp3="/audio/Weekly Weather Minute.mp3" />
      </div>
    </div>
  )
}