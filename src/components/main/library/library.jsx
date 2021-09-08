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
      <h3 className="text-header2">{t("library")}</h3>
      <Tabs
        bg="light"
        expand="lg"
        defaultActiveKey="LikedSonge"
        id="uncontrolled-tab-example"
        className="tabs.active"
        style={{ backgroundColor: "#121212", color: "#ffffff" }}
      >
        <Tab
          eventKey="LikedSonge"
          title={t("likedSonge")}
          bsClass="col"
          style={{ backgroundColor: "#121212", color: "#ffffff" }}
        >
          <LikedSonge></LikedSonge>
        </Tab>
        <Tab
          eventKey="Albums"
          title={t("albums")}
          bsClass="col"
          style={{ backgroundColor: "#121212", color: "#ffffff" }}
        >
          <SavedAlbums></SavedAlbums>
        </Tab>
        <Tab
          eventKey="Playlist"
          title={t("playlists")}
          bsClass="col"
          style={{ backgroundColor: "#121212", color: "#ffffff" }}
        >
          <Playlists></Playlists>
        </Tab>
        <Tab
          eventKey="Artists"
          title={t("artist")}
          bsClass="col"
          style={{ backgroundColor: "#121212", color: "#ffffff" }}
        >
          <FollowedArtists></FollowedArtists>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Library;
