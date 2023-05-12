import "./homepage.css"
import Playlist from "./Playlist";
import SongPlayer from "./SongPlayer";
import Menu from "./Menu";

function Homepage()
{
    return(
        <div className="homepage-container">
            <div className="playlist">
                <Playlist />
            </div>
            <div className="home-side">
                <Menu />
            </div>
            <div className="song-player">
                <SongPlayer />
            </div>
        </div>
    );
}

export default Homepage;