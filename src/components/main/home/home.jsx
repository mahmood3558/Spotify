import NewReleases from "./newReleases";
import TopTracks from "./topTracks";

const home = () => {
  return (
    <div>
      <h3 className="text-header">New Releases</h3>
      <NewReleases></NewReleases>
      <h3 className="text-header">Top Tracks</h3>
      <TopTracks></TopTracks>
    </div>
  );
};

export default home;
