import React from 'react';

export const Audio = (props) => {
  const mp3 = props.mp3
  return (
    <div className="audio-examples-player">
      <audio
        controls
        controlsList="nodownload">
        <source src={mp3} type="audio/mp3" />
        <p>Your browser doesn't support HTML5 audio. Here is a <a href={mp3}>link to the audio</a> instead.</p>
      </audio>
    </div>
  )
}