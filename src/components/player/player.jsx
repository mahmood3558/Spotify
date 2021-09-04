import React, { useContext } from "react";
import SpotifyPlayer from "react-spotify-player";
import Context from "../../context/context";

const Player = () => {
  const context = useContext(Context);
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  const uri = context.playerId;
  console.log(uri);
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

  const size = {
    width: "100%",
    height: 80,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'

  return (
    <div>
      <form>
        {/* {uri == null ? (
          <SpotifyPlayer uri={uri} size={size} view={view} theme={theme} />
        ) : (
          <p className="player-null">Your player is null</p>
        )} */}
        <SpotifyPlayer uri={uri} size={size} view={view} theme={theme} />
      </form>
    </div>
  );
};

export default Player;
