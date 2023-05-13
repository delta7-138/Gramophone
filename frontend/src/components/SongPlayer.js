import "./songPlayer.css"
import myImg from '../assets/login_background.jpg'
import song from "../assets/hxh.mp3"
import { IconContext } from "react-icons";
import { BsMusicNoteBeamed, BsPlusCircleFill} from "react-icons/bs"
import { RxDownload } from "react-icons/rx"
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"
import { MdArrowForwardIos , MdArrowBackIosNew, MdPlayArrow, MdPause } from "react-icons/md"
import { useState, useEffect, useRef } from "react";

// import { useRecoilState } from 'recoil';
// import { currentSongState } from './atom';

function SongPlayer()
{
    const current_song = {
        'img': myImg,
        'title': 'The Legened of the Martial Artist',
        'artist': 'Hunter x Hunter 2011 Chimera Ant Arc',
        'song' : song
    };

    // React Hooks ----------------------------- START
    const songRef = useRef(null);
    const [isPlaying, setisPlaying] = useState(false);
    const [isMute, setisMute] = useState(false);

    const [current_time,setCurrentTime] = useState(0);
    const [formatCurrentTime, setFormatCurrentTime] = useState('0:00');
    
    const [duration, setDuration] = useState(0);
    const [formatDuration, setFormatDuration] = useState('0:00');

    const [volume,setVolume] = useState(1);
    
    const [seekValue, setseekValue] = useState(0);
    // React Hooks ----------------------------- END

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.round(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };
    // Controlling Music ----------------------- START

    useEffect(() => {
        if (duration && duration !== 0) {
            // console.log(duration);
            const temp = formatTime(duration);
            setFormatDuration(temp);
        }
    },[duration]);

    const loadSong = () => {
        const temp = Math.round(songRef.current.duration);
        setDuration(temp);
        songRef.current.volume = volume;
    };

    useEffect(() => {
        if (current_time && current_time !== 0) {
            // console.log(current_time);
            const temp2 = Math.round(current_time);
            const temp = formatTime(temp2);
            setFormatCurrentTime(temp);
        }
    },[current_time]);

    const timeUpdate = () => {
        const temp = Math.round(songRef.current.currentTime);
        setCurrentTime(temp);

        const temp2 = (current_time/duration) * 100;
        setseekValue(temp2);
        // console.log('seekvalue',seekValue);
    };

    const onSeekChange = (e) => {
        const seekTime = Math.round((e.target.value / 100) * duration);
        setCurrentTime(seekTime);
        document.getElementById("currentSong").currentTime = seekTime;
        console.log(seekTime);
    };

    const handleMuteClick = () => {
        const music = document.getElementById("currentSong");
        if(isMute){
            music.volume = volume;
        }
        else {
            music.volume = 0;
        }
        
        setisMute(!isMute);
    };
    
    const handlePlayClick = () => {
        const music = document.getElementById("currentSong");
        if(isPlaying){
            music.pause();
        }
        else {
            music.play();
        }
        setisPlaying(!isPlaying);
    };

    return (
        <div className="player">
            <audio id="currentSong" src={current_song.song}
                                    ref={songRef}
                                    onLoadedMetadata={loadSong}
                                    onTimeUpdate={timeUpdate}
            />

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
            <IconContext.Provider value={{className:'icons'}}>
                <BsMusicNoteBeamed />
                <MdArrowBackIosNew />
                {isPlaying ? (
                    <MdPause id="play-btn" onClick={handlePlayClick}/>) 
                    : (
                        <MdPlayArrow id="play-btn" onClick={handlePlayClick}/>
                    )}
                <MdArrowForwardIos />
                <RxDownload id="download-btn"/>
            </IconContext.Provider>
            
            <span id="current-time">{formatCurrentTime}</span>
            <div className="seek-bar">
                <input type={"range"} 
                        id="seek" 
                        min="0" 
                        max="100"
                        value={seekValue}
                        onChange={onSeekChange}
                        // onMouseDown={}
                />
                <div className="seek-bar2" id="seek2" 
                                           style={{width:seekValue.toString()+'%'}}
                ></div>
                <div className="dot" style={{left:seekValue.toString()+'%'}}></div>
            </div>
            <span id="remain-time">{formatDuration}</span>
            
            <div className="volume">
                {isMute ? (<FaVolumeMute id="vol-icons" onClick={handleMuteClick}/>) 
                        : (<FaVolumeUp id="vol-icons" onClick={handleMuteClick}/>)
                }
                <input type={"range"} min="0" max="100" id="vol-bar"/>
                <div className="vol-bar" id="vol"></div>
                <div className="dot" id="vol-dot"></div>
            </div>
            <BsPlusCircleFill id="add-song"/>
        </div>
    );
}

export default SongPlayer;