import "./songPlayer.css"
import myImg from '../assets/login_background.jpg'
import { IconContext } from "react-icons";
import {BsMusicNoteBeamed, BsPlusCircleFill} from "react-icons/bs"
import {RxDownload} from "react-icons/rx"
import {AiTwotoneSound} from "react-icons/ai"
import {MdArrowForwardIos , MdArrowBackIosNew, MdPlayArrow} from "react-icons/md"

function SongPlayer()
{
    const current_song = {
                            'img': myImg,
                            'title': 'Current Song',
                            'artist': 'Artist'
    };

    // Controlling Music\
    const music = new Audio();

    return (
        <div className="player">
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
                <MdPlayArrow id="play-btn"/>
                {/* <MdPause /> */}
                <MdArrowForwardIos />
                <RxDownload id="download-btn"/>
            </IconContext.Provider>
            <span id="current-time">0:00</span>
            <div className="seek-bar">
                <input type={"range"} id="seek" min="0" max="100"/>
                <div className="seek-bar2" id="seek2"></div>
                <div className="dot"></div>
            </div>
            <span id="remain-time">1:00</span>
            <div className="volume">
                <AiTwotoneSound id="vol-icons"/>
                <input type={"range"} min="0" max="100" id="vol-bar"/>
                <div className="vol-bar" id="vol"></div>
                <div className="dot" id="vol-dot"></div>
            </div>
            <BsPlusCircleFill id="add-song"/>
        </div>
    );
}

export default SongPlayer;