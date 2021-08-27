import { Switch, Route } from "react-router-dom";

import Home from "./home/home";
import Library from "./library/library";
import Search from "./search/search";
import PlayList from "./playList/playList";
import LikedSonge from "./playList/likedSonge";
import CreatePlaylist from "./playList/createPlaylist";

const main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/library" component={Library} />
        <Route path="/search" component={Search} />
        <Route path="/playList" component={PlayList} />
        <Route path="/likedSonge" component={LikedSonge} />
        <Route path="/createPlaylist" component={CreatePlaylist} />

        {/* <Route path="/" exact render={() => <About teachersName="یونس قربانی" />}/>  */}
      </Switch>
    </div>
  );
};

export default main;
