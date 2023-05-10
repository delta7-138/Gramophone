import "./playlist.css"
import myImg from '../images/login_background.jpg'
import {BsMusicNote, BsPlayCircleFill} from 'react-icons/bs'
import {IconContext} from 'react-icons'

function Playlist()
{
    const songs = [];

    for(let i = 1; i < 9; i++ )
    {
        songs.push({'title':'My Song'+i.toString(), 'artist':'artist'+i.toString(), 'img':myImg})
    }

    return (
        <div className="playlist-side">
            <div className="gramophone">
                <h1>Gramophone</h1>
                <p>The OG way</p>
            </div>
            <div className="playlists">
                <IconContext.Provider value={{className:"music-note"}}>
                    <h4 className="active"><span></span><BsMusicNote />Now Listening</h4>
                    <h4><span></span><BsMusicNote />Last Listening</h4>
                    <h4><span></span><BsMusicNote />Recommended</h4>
                </IconContext.Provider>
            </div>

            <div className="songs-list">
                {songs.map((item,index) => (
                    <li className="song-item">
                        <span>{ index < 10 ? (index+1).toString().padStart(2,'0')
                                : index+1}</span>
                        <img src={item.img} alt="" />
                        <h5 className="song-title">
                            {item.title}<br/>
                            <div className="artist-name">{item.artist}</div>
                        </h5>
                        <IconContext.Provider value={{className:'song-play-btn'}}>
                            <BsPlayCircleFill id = {index}/>
                        </IconContext.Provider>
                    </li>
                ))}
                
            </div>
        </div>
    );
}

export default Playlist;