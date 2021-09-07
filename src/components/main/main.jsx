import { Switch, Route } from "react-router-dom";

import Home from "./home/home";
import Library from "./library/library";
import Search from "./search/search";
import PlayLists from "./playList/playLists";
import LikedSonge from "./playList/likedSonge";
// import CreatePlaylist from "./playList/createPlaylist";
import Profile from "./profile/profile";
import ShowArtist from "./artist/artist";
import Album from "./album/album";
import Categorie from "./categories/categorie";
import PlayListTracks from "./playList/playListTracks";

const main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/library" component={Library} />
        <Route path="/search" component={Search} />
        <Route path="/playList" component={PlayLists} />
        <Route path="/likedSonge" component={LikedSonge} />
        {/* <Route path="/createPlaylist" component={CreatePlaylist} /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/artist" component={ShowArtist} />
        <Route path="/album" component={Album} />
        <Route path="/categorie" component={Categorie} />
        <Route path="/playListTracks" component={PlayListTracks} />
        {/* <Route path="/" exact render={() => <About teachersName="یونس قربانی" />}/>  */}
      </Switch>
    </div>
  );
};

export default main;
