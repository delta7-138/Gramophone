import "./menu.css"
import profile_pic from "../assets/profile.png"
import myImg from "../assets/login_background.jpg"
import artPic from "../assets/blw.png"
import song from "../assets/Blinding_Lights.mp3"
import { BsSearch, BsPlayCircleFill } from "react-icons/bs"
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai"
import { useState, useRef } from "react";
import { useRecoilState } from "recoil"
import { currentSongState } from "../atom"

const CreateTrackForm = ({ onCancel }) => {
    const [songName, setSongName] = useState('');
    const [songPoster, setSongPoster] = useState('');
    const [songFile, setSongFile] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Submit the form data and perform necessary actions
        console.log('Submitted:', songName, songPoster, songFile);
    };

    return (
        <form className="form">
        <label htmlFor="songName">Song Name:</label>
        <input
            type="text"
            id="songName"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
        />

        <label htmlFor="songPoster">Song Poster:</label>
        <input
            type="text"
            id="songPoster"
            value={songPoster}
            onChange={(e) => setSongPoster(e.target.value)}
        />

        <label htmlFor="songFile">Song File:</label>
        <input
            type="file"
            id="songFile"
            accept=".mp3"
            onChange={(e) => setSongFile(e.target.files[0])}
        />

        <div className="buttons">
            <button type="submit" onClick={handleFormSubmit}>
            Submit
            </button>
            <button type="button" onClick={onCancel}>
            Cancel
            </button>
        </div>
        </form>
    );
};

const CreatePlaylistForm = ({ onCancel }) => {
    const [playlistName, setPlaylistName] = useState('');
    const [playlistPoster, setPlaylistPoster] = useState('');
    const [songs, setSongs] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Submit the form data and perform necessary actions
        console.log('Submitted:', playlistName, playlistPoster, songs);
    };

    const addSong = () => {
        setSongs([...songs, { name: '', poster: '', file: null }]);
    };

    const removeSong = (index) => {
        const updatedSongs = [...songs];
        updatedSongs.splice(index, 1);
        setSongs(updatedSongs);
    };

    const handleSongChange = (index, field, value) => {
        const updatedSongs = [...songs];
        updatedSongs[index][field] = value;
        setSongs(updatedSongs);
    };

    return (
        <form className="form">
        <label htmlFor="playlistName">Playlist Name:</label>
        <input
            type="text"
            id="playlistName"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
        />

        <label htmlFor="playlistPoster">Playlist Poster:</label>
        <input
            type="text"
            id="playlistPoster"
            value={playlistPoster}
            onChange={(e) => setPlaylistPoster(e.target.value)}
        />

        <label htmlFor="songs">Songs:</label>
        {songs.map((song, index) => (
            <div key={index}>
            <input
                type="text"
                placeholder="Song Name"
                value={song.name}
                onChange={(e) => handleSongChange(index, 'name', e.target.value)}
            />
            <input
                type="text"
                placeholder="Song Poster"
                value={song.poster}
                onChange={(e) => handleSongChange(index, 'poster', e.target.value)}
                />
            <input
                type="file"
                accept=".mp3"
                onChange={(e) =>
                handleSongChange(index, 'file', e.target.files[0])
                }
            />
            <button type="button" onClick={() => removeSong(index)}>
                Remove
            </button>
            </div>
        ))}
        <button type="button" onClick={addSong}>
            Add Song
        </button>

        <div className="buttons">
            <button type="submit" onClick={handleFormSubmit}>
            Submit
            </button>
            <button type="button" onClick={onCancel}>
            Cancel
            </button>
        </div>
        </form>
    );
};


function Menu()
{
    const pop_songs = [];
    for(let i = 1; i < 15; i++ )
    {
        pop_songs.push({'title':'My Song'+i.toString(), 'artist':'artist'+i.toString(), 'img':myImg})
    }

    const pop_artists = [];
    for(let i = 1; i < 15; i++ )
    {
        pop_artists.push({'name':'Artist'+i.toString(), 'img':artPic})
    }

    // react hooks --------------------------- START
    const [search,setSearch] = useState('');
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const [openProfile, setOpenProfile] = useState(false);
    const handleProfileClick = () => {
        setOpenProfile(!openProfile);
    }

    const [currentSong, setCurrentSong] = useRecoilState(currentSongState);
    
    const [displayForm, setDisplayForm] = useState(null);
    const [showPlusButtons, setShowPlusButtons] = useState(true);

    const handleCreateTrack = () => {
        setDisplayForm('track');
        setShowPlusButtons(false);
    };

    const handleCreatePlaylist = () => {
        setDisplayForm('playlist');
        setShowPlusButtons(false);
    };

    const handleCancel = () => {
        setDisplayForm(null);
        setShowPlusButtons(true);
    };
    // react hooks --------------------------- END

    // popular songs scrolling
    const songScrollRight = () => {
        console.log("click works");
        document.getElementById("ps").scrollLeft += 330;
    };

    const songScrollLeft = () => {
        console.log("click works");
        document.getElementById("ps").scrollLeft -= 330;
    };

    const navigateRefs = [
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const [whichNav, setwhichNav] = useState(0); // 0 - curr; 1 - prev; 2 - recommend

    const setActive = (refIndex) => {
        navigateRefs.forEach((ref, index) => {
          if (index === refIndex) {
            ref.current.classList.add('active');
          } else {
            ref.current.classList.remove('active');
          }
        });
    };

    const toHome = () => {
        setActive(0);
        setwhichNav(0);
    };
    const toMyLib = () => {
        setActive(1)
        setwhichNav(1);
    };
    const toCreate = () => {
        setActive(2)
        setwhichNav(2);
    };

    // ----------------------------------- end
    
    // popular artist scrolling
    const artScrollRight = () => {
        console.log("click works");
        document.getElementById("pa").scrollLeft += 330;
    };

    const artScrollLeft = () => {
        console.log("click works");
        document.getElementById("pa").scrollLeft -= 330;
    };
    // ----------------------------------- end
    const playSong = () => {
        setCurrentSong({
            title: 'Blinding Lights',
            artist: 'The Weekend',
            poster: myImg,
            song: song
        })
    };

    return (
        <div className="menu-side">
            <nav>
                <ul>
                    <li ref={navigateRefs[0]} className="active" onClick={toHome} key="home">Home</li>
                    <li ref={navigateRefs[1]}  onClick={toMyLib} key="lib">My Library</li>
                    <li ref={navigateRefs[2]}  onClick={toCreate} key="create">Create</li>
                </ul>
                
                <div className="search-bar">
                    <BsSearch id="search-icon"/>
                    <input type={"text"} value={search} 
                            onChange={handleSearchChange}
                            placeholder="Search.." id=""
                    />
                </div>

                <div className="user-profile">
                    <img src={profile_pic} alt="" onClick={handleProfileClick}/>
                    {openProfile ? (
                        <div className="profile-menu">
                            <h3>Settings</h3>
                            <h3 id="logout">Logout</h3>
                        </div>
                        ) : (
                        <></>
                    )}
                </div>
            </nav>
            <div className="content">
                <h1>Blinding Lights</h1>
                <p>by The Weekend</p>
                <p>Most Listened song on Gramophone</p>
                <div className="content-btns">
                    <button id = "listen-now" onClick={playSong}>Listen Now</button>
                    <button id = "add-playlist">Add to Playlist</button>
                </div>
            </div>
            {whichNav === 0 && 
            <>
                <div className="popular">
                    <div className="H4">
                        <h4>Popular Songs</h4>
                        <div className="popular-btns">
                            <AiOutlineCaretLeft onClick={songScrollLeft}/>
                            <AiOutlineCaretRight onClick={songScrollRight}/>
                        </div>
                    </div>
                    <div id="ps" className="pop-songs">
                        {pop_songs.map((item,index) => (
                            <li key={index} className="song-item">
                                <div className="song-img">
                                    <img src={item.img} alt="" />
                                    <div className="song-play-btn">
                                        <BsPlayCircleFill id ="1"/>
                                    </div>
                                </div>
    
                                <h5 className="song-title">
                                    {item.title}<br/>
                                    <div className="artist-name">{item.artist}</div>
                                </h5>
                            </li>
                        ))}
                    </div>
                    <div className="H4">
                        <h4>Popular Artists</h4>
                        <div className="popular-btns">
                            <AiOutlineCaretLeft  onClick={artScrollLeft}/>
                            <AiOutlineCaretRight onClick={artScrollRight}/>
                        </div>
                    </div>
                    <div id ="pa" className="artists">
                        {pop_artists.map((item,index) => (
                            <li key={item.name} className="song-item">
                                <img src={item.img} alt="" />
                            </li>
                        ))}
                    </div>
                </div>
            </>
            }
            {whichNav === 1 && 
            <>
                <div className="popular">
                    <div className="H4" style={{fontSize:"20px"}}>
                        <h4>Your Tracks</h4>
                        <div className="popular-btns">
                            <AiOutlineCaretLeft onClick={songScrollLeft}/>
                            <AiOutlineCaretRight onClick={songScrollRight}/>
                        </div>
                    </div>
                    <div id="ps" className="pop-songs">
                        {pop_songs.map((item,index) => (
                            <li key={index} className="song-item">
                                <div className="song-img">
                                    <img src={item.img} alt="" />
                                    <div className="song-play-btn">
                                        <BsPlayCircleFill id ="1"/>
                                    </div>
                                </div>
    
                                <h5 className="song-title">
                                    {item.title}<br/>
                                    <div className="artist-name">{item.artist}</div>
                                </h5>
                            </li>
                        ))}
                    </div>
                    <div className="H4" style={{fontSize:"20px"}}>
                        <h4>Your Playlists</h4>
                        <div className="popular-btns">
                            <AiOutlineCaretLeft onClick={songScrollLeft}/>
                            <AiOutlineCaretRight onClick={songScrollRight}/>
                        </div>
                    </div>
                    <div id="ps" className="pop-songs">
                        {pop_songs.map((item,index) => (
                            <li key={index} className="song-item">
                                <div className="song-img">
                                    <img src={item.img} alt="" />
                                    <div className="song-play-btn">
                                        <BsPlayCircleFill id ="1"/>
                                    </div>
                                </div>
    
                                <h5 className="song-title">
                                    {item.title}<br/>
                                    <div className="artist-name">{item.artist}</div>
                                </h5>
                            </li>
                        ))}
                    </div>
                </div>
            </>
            }
            {whichNav === 2 && 
                <>
                    <div className="container">
                        <div className="plus-buttons">
                            {showPlusButtons && (
                                <>
                                    <button type="button" className="create-button" onClick={handleCreateTrack}>
                                        <span className="create-button-icon">+</span>
                                        <span className="create-button-text">Create Track</span>
                                    </button>

                                    <button type="button" className="create-button" onClick={handleCreatePlaylist}>
                                        <span className="create-button-icon">+</span>
                                        <span className="create-button-text">Create Playlist</span>
                                    </button>
                                </>
                            )}
                        </div>
                        {displayForm === 'track' && <CreateTrackForm onCancel={handleCancel} />}
                        {displayForm === 'playlist' && (
                            <CreatePlaylistForm onCancel={handleCancel} />
                        )}
                    </div>
                </>
            }
        </div>
    )
}

export default Menu;