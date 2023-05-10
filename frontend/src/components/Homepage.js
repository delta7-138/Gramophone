import "./homepage.css"
import Playlist from "./Playlist";
import SongPlayer from "./SongPlayer";

function Homepage()
{
    return(
        <div className="homepage-container">
            <div className="playlist-side">
                <Playlist />
            </div>
            <div className="home-side">
                
            </div>
            <div className="song-player">
                <SongPlayer />
            </div>
        </div>
    );
}

export default Homepage;