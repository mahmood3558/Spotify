import React from "react";
import SpotifyPlayer from "react-spotify-player";

const Player = () => {
  const [getUri, setUri] = React.useState(
    "spotify:track:7ccTcabbJlCJiIqtrSSwBk"
  );

  const size = {
    width: "100%",
    height: 80,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <div>
      <form>
        <SpotifyPlayer uri={getUri} size={size} view={view} theme={theme} />
      </form>
    </div>
  );
};

export default Player;
