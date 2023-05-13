import "./playlist.css"
import myImg from '../assets/login_background.jpg'
import yourImg from "../assets/blw.png"
import song from "../assets/hxh.mp3"
import {BsMusicNote, BsPlayCircleFill} from 'react-icons/bs'
import {IconContext} from 'react-icons'
import { useState } from "react"
// import { currentSongState } from "./atom"
// import { useRecoilState } from "recoil"

function Playlist()
{
    const playlist1 = {'name': 'Playlist1', 'songs':[], 'private':false, 'created by':'prem'};
    const playlist2 = {'name': 'Playlist2', 'songs': [], 'private':false, 'created by':'krishna'};
    const playlist3 = {'name': 'Recommended', 'songs':[]};

    for(let i = 1; i < 9; i++ )
    {
        playlist1.songs.push({ 'title':'My Song'+i.toString(), 
                            'artist':'artist'+i.toString(), 
                            'img':myImg,
                            'song': song
        });
        playlist2.songs.push({ 'title':'Your Song'+i.toString(), 
                            'artist':'artist'+i.toString(), 
                            'img':yourImg,
                            'song': song
        });

        playlist3.songs.push({ 'title':'Recom'+i.toString(), 
                            'artist':'artist'+i.toString(), 
                            'img':yourImg,
                            'song': song
        });
    }

    // React Hooks ----------------------------- START
    const [whichList, setwhichList] = useState(0); // 0 - curr; 1 - prev; 2 - recommend
    const toPrevList = () => {
        setwhichList(1);
    };
    const toCurrList = () => {
        setwhichList(0);
    };
    const toRecommend = () => {
        setwhichList(2);
    };

    // React Hooks ----------------------------- END
    // const [currentSong, setCurrentSong] = useRecoilState(currentSongState);
    // const changeSong = (song) => {
    //     console.log(song);
    // }
    // Handlers -------------------------------- START
    
    // Handlers -------------------------------- END
    
    let current_list = null;
    let prev_list = null;

    current_list = playlist1;
    prev_list = playlist2;

    return (
        <div className="playlist-side">
            <div className="gramophone">
                <h1>Gramophone</h1>
                <p>The OG way</p>
            </div>
            <div className="playlists">
                <IconContext.Provider value={{className:"music-note"}}>
                    <h4 className="active" onClick={toCurrList}><span></span><BsMusicNote />Now Listening</h4>
                    <h4 onClick={toPrevList}><span></span><BsMusicNote />Last Listening</h4>
                    <h4 onClick={toRecommend}><span></span><BsMusicNote />Recommended</h4>
                </IconContext.Provider>
            </div>

            {whichList === 0 && 
                <>
                    <h3>{current_list.name}</h3>
                    <div className="songs-list">
                        {current_list.songs.map((item,index) => (
                            <li key={index} className="song-item">
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
                </>
            }
            { whichList === 1 && 
                <>
                    <h3>{prev_list.name}</h3>
                    <div className="songs-list">
                        {prev_list.songs.map((item,index) => (
                            <li key={index} className="song-item">
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
                </>
            }
            { whichList === 2 && 
                <>
                    <h3>{playlist3.name}</h3>
                    <div className="songs-list">
                        {playlist3.songs.map((item,index) => (
                            <li key={index} className="song-item">
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
                </>
            }
            {/* <h3>Playlist-title</h3>
            <div className="songs-list">
                {current_list.songs.map((item,index) => (
                    <li key={index} className="song-item">
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
            </div> */}
        </div>
    );
}

export default Playlist;