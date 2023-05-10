import "./songPlayer.css"
import myImg from '../images/login_background.jpg'

function SongPlayer()
{
    const current_song = {
                            'img': myImg,
                            'title': 'Current Song',
                            'artist': 'Artist'
                        };
    return (
        <>
            <div className="wave">
                <div className="wave1"></div>
                <div className="wave1"></div>
                <div className="wave1"></div>
            </div>
            <img id="current-song" src={current_song.img} alt="" />
            <h5>
                {current_song.title}
                <div className="artist-name">{current_song.artist}</div>
                
            </h5>
        </>
    );
}

export default SongPlayer;