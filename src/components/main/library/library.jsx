import { Tabs, Tab } from "react-bootstrap";

import FollowedArtists from "./followedArtists";
import Playlists from "../playList/playLists";
import SavedAlbums from "./savedAlbums";
import LikedSonge from "../playList/likedSonge";

const library = () => {
  return (
    <div>
      <h3 className="text-header">Your Library</h3>
      <Tabs defaultActiveKey="LikedSonge" id="uncontrolled-tab-example">
        <Tab eventKey="LikedSonge" title="Liked Songe" bsClass="col">
          <LikedSonge></LikedSonge>
        </Tab>
        <Tab eventKey="Albums" title="Albums" bsClass="col">
          <SavedAlbums></SavedAlbums>
        </Tab>
        <Tab eventKey="Playlist" title="Playlist" bsClass="col">
          <Playlists></Playlists>
        </Tab>
        <Tab eventKey="Artists" title="Artists" bsClass="col">
          <FollowedArtists></FollowedArtists>
        </Tab>
      </Tabs>
    </div>
  );
};

export default library;
