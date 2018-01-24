import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export const Main = (props) => {

  return (
    <div>
      <h1>Matt Sohn</h1>
      <ReactAudioPlayer
        src="my_audio_file.ogg"
        autoPlay
        controls />
    </div>
  )
}