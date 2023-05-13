import "./playlist.css"
import myImg from '../assets/login_background.jpg'
import yourImg from "../assets/blw.png"
import song1 from "../assets/hxh.mp3"
import song2 from "../assets/Blinding_Lights.mp3"
import {BsMusicNote, BsPlayCircleFill} from 'react-icons/bs'
import {IconContext} from 'react-icons'
import { useState,useRef } from "react"
import { currentSongState } from "../atom"
import { useRecoilState } from "recoil"

function Playlist()
{
    const navigateRefs = [
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const playlist1 = {'name': 'Playlist1', 'songs':[], 'private':false, 'created by':'prem'};
    const playlist2 = {'name': 'Playlist2', 'songs': [], 'private':false, 'created by':'krishna'};
    const playlist3 = {'name': 'Recommended', 'songs':[]};

    for(let i = 1; i < 9; i++ )
    {
        playlist1.songs.push({ 'title':'My Song'+i.toString(), 
                            'artist':'artist'+i.toString(), 
                            'img':myImg,
                            'song': song1
        });
        playlist2.songs.push({ 'title':'Your Song'+i.toString(), 
                            'artist':'artist'+i.toString(), 
                            'img':yourImg,
                            'song': song2
        });

        playlist3.songs.push({ 'title':'Recom'+i.toString(), 
                            'artist':'artist'+i.toString(), 
                            'img':yourImg,
                            'song': song1
        });
    }

    // React Hooks ----------------------------- START    
    const [whichList, setwhichList] = useState(0); // 0 - curr; 1 - prev; 2 - recommend

    const setActive = (refIndex) => {
        navigateRefs.forEach((ref, index) => {
          if (index === refIndex) {
            ref.current.classList.add('active');
          } else {
            ref.current.classList.remove('active');
          }
        });
    };

    const toPrevList = () => {
        setActive(1);
        setwhichList(1);
    };
    const toCurrList = () => {
        setActive(0)
        setwhichList(0);
    };
    const toRecommend = () => {
        setActive(2)
        setwhichList(2);
    };

    const [currentSong, setCurrentSong] = useRecoilState(currentSongState);

    // React Hooks ----------------------------- END
    
    // Handlers -------------------------------- START
    // useEffect(()=>{
    //     console.log(currentSong.name);
    // },[currentSong]);
    const playSong1 = () => {
        console.log("last");
        setCurrentSong({
            title: playlist1.songs[0].title,
            artist: playlist1.songs[0].artist,
            poster: playlist1.songs[0].img,
            song: playlist1.songs[0].song
        });
    };

    const playSong2 = () => {
        console.log("last2");
        setCurrentSong({
            title: playlist2.songs[0].title,
            artist: playlist2.songs[0].artist,
            poster: playlist2.songs[0].img,
            song: playlist2.songs[0].song
        });
    };
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
                    <h4 ref={navigateRefs[0]} className="active" onClick={toCurrList}><span></span><BsMusicNote />Now Listening</h4>
                    <h4 ref={navigateRefs[1]} onClick={toPrevList}><span></span><BsMusicNote />Last Listening</h4>
                    <h4 ref={navigateRefs[2]} onClick={toRecommend}><span></span><BsMusicNote />Recommended</h4>
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
                                    <BsPlayCircleFill id = {index} onClick={playSong1}/>
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
                                    <BsPlayCircleFill id = {index} onClick={playSong2}/>
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
        </div>
    );
}

export default Playlist;