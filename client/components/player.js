import React from "react";
import { Audio } from "./index";
import AudioPlayer from "react-modular-audio-player";

export const Player = props => {
  return (
    <div className="audio">
      <div className="audio-title">
        <h2>Examples </h2>
      </div>
      <div className="audio-examples">
        <div className="audio-examples-title">Audiobook</div>
        <AudioPlayer
          audioFiles={[{ src: "/audio/Pride and Prejudice.mp3" }]}
          playerWidth={"90%"}
          hideForward={true}
          hideLoop={true}
          hideRewind={true}
          hideName={true}
          hideSeeking={true}
          iconSize={"1.7rem"}
          fontSize={"1.2rem"}
        />
      </div>
      <div className="audio-examples">
        <div className="audio-examples-title">Educational</div>
        <AudioPlayer
          audioFiles={[{ src: "/audio/Test Cut.mp3" }]}
          playerWidth={"90%"}
          hideForward={true}
          hideLoop={true}
          hideRewind={true}
          hideName={true}
          hideSeeking={true}
          iconSize={"1.7rem"}
          fontSize={"1.2rem"}
        />
      </div>
      <div className="audio-examples">
        <div className="audio-examples-title">Podcast</div>
        <AudioPlayer
          audioFiles={[{ src: "/audio/Weekly Weather Minute.mp3" }]}
          playerWidth={"90%"}
          hideForward={true}
          hideLoop={true}
          hideRewind={true}
          hideName={true}
          hideSeeking={true}
          iconSize={"1.7rem"}
          fontSize={"1.2rem"}
        />
      </div>
    </div>
  );
};
