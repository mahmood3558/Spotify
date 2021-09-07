import { useTranslation } from "react-i18next";

import FeaturedPlaylists from "./featuredPlaylists";
import NewReleases from "./newReleases";
import RecentlyPlayedTracks from "./recentlyPlayedTracks";
// import TopArtists from "../profile/topArtists";
import TopTracks from "./topTracks";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-header">{t("recentlyPlayedTracks")}</h3>
      <RecentlyPlayedTracks></RecentlyPlayedTracks>
      <h3 className="text-header">{t("newReleases")}</h3>
      <NewReleases></NewReleases>
      <h3 className="text-header">{t("featuredPlaylists")}</h3>
      <FeaturedPlaylists></FeaturedPlaylists>
      <h3 className="text-header">{t("topTracks")}</h3>
      <TopTracks></TopTracks>
      {/* <h3 className="text-header">Top Artists</h3>
      <TopArtists></TopArtists> */}
    </div>
  );
};

export default Home;
