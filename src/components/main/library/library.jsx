import { Tabs, Tab } from "react-bootstrap";

import { useTranslation } from "react-i18next";

import FollowedArtists from "./followedArtists";
import Playlists from "../playList/playLists";
import SavedAlbums from "./savedAlbums";
import LikedSonge from "../playList/likedSonge";

const Library = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-header">{t("library")}</h3>
      <Tabs defaultActiveKey="LikedSonge" id="uncontrolled-tab-example">
        <Tab eventKey="LikedSonge" title={t("likedSonge")} bsClass="col">
          <LikedSonge></LikedSonge>
        </Tab>
        <Tab eventKey="Albums" title={t("albums")} bsClass="col">
          <SavedAlbums></SavedAlbums>
        </Tab>
        <Tab eventKey="Playlist" title={t("playlists")} bsClass="col">
          <Playlists></Playlists>
        </Tab>
        <Tab eventKey="Artists" title={t("artist")} bsClass="col">
          <FollowedArtists></FollowedArtists>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Library;
