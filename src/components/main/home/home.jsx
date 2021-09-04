import FeaturedPlaylists from "./featuredPlaylists";
import NewReleases from "./newReleases";
import RecentlyPlayedTracks from "./recentlyPlayedTracks";
// import TopArtists from "../profile/topArtists";
import TopTracks from "./topTracks";

const home = () => {
  return (
    <div>
      <h3 className="text-header">Recently Played Tracks</h3>
      <RecentlyPlayedTracks></RecentlyPlayedTracks>
      <h3 className="text-header">New Releases</h3>
      <NewReleases></NewReleases>
      <h3 className="text-header">Featured Playlists</h3>
      <FeaturedPlaylists></FeaturedPlaylists>
      <h3 className="text-header">Your Top Tracks</h3>
      <TopTracks></TopTracks>
      {/* <h3 className="text-header">Top Artists</h3>
      <TopArtists></TopArtists> */}
    </div>
  );
};

export default home;
