import "./menu.css"
import profile_pic from "../assets/profile.png"
import myImg from "../assets/login_background.jpg"
import artPic from "../assets/blw.png"
import blindingsong from "../assets/Blinding_Lights.mp3"
import { BsSearch, BsPlayCircleFill } from "react-icons/bs"
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai"
import { useState, useRef } from "react";
import { useRecoilState } from "recoil"
import { currentSongState } from "../atom"
import { user_tracks } from "../atom"
import { curr_track_cover } from "../atom"
import axios from "axios";
import { isPlayingState } from "../atom";
import { search_tracks } from "../atom";
import { nav_state } from "../atom"
import { index_song_list } from "../atom"
import { currentPlaylistState } from "../atom"


const url_root = 'http://localhost:5000'


 
const CreateTrackForm = ({ onCancel }) => {
    const [songName, setSongName] = useState('');
    const [songPoster, setSongPoster] = useState(null);
    const [songFile, setSongFile] = useState(null);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Process the form submission here
      console.log('Song Name:', songName);
      console.log('Song Poster:', songPoster);
      console.log('Song File:', songFile);

      const FormData = require('form-data');
      let data = new FormData();

        data.append('accessToken', localStorage.getItem("gram-jwt-token"));
        data.append('track', songFile);
        data.append('cover', songPoster);
        data.append('name', songName);

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url_root + '/api/tracks/createTrack',
        headers: { 
            'Content-Type' : 'multipart/form-data'
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(response.data)
            alert("track created!")
        })
        .catch((error) => {
        console.log(error);
        });
      // Reset the form
      setSongName('');
      setSongPoster(null);
      setSongFile(null);
    };
  
    return (
      <form className="form">
        <label htmlFor="songName">Track Name:
        <input
          type="text"
          id="songName"
          value={songName}
          placeholder="Song name"
          onChange={(e) => setSongName(e.target.value)}
        />
        </label>
  
        <label htmlFor="songPoster">Track Poster:
        <input
          type="file"
          accept="image/*"
          id="songPoster"
          placeholder="Song Poster"
          onChange={(e) => setSongPoster(e.target.files[0])}
        />
        </label>
  
        <label htmlFor="songFile">Song File:
        <input
          type="file"
          accept=".mp3"
          id="songFile"
          onChange={(e) => setSongFile(e.target.files[0])}
        />
        </label>
  
        <div className="buttons">
          <button type="submit" onClick={handleFormSubmit}>
            Create
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
    const [playlistPoster, setPlaylistPoster] = useState(null);
    const [songs, setSongs] = useState([{ name: '', poster: '', file: null }]);
  
    const handleInputChange = (index, field, value) => {
      const updatedSongs = [...songs];
      updatedSongs[index][field] = value;
      setSongs(updatedSongs);
    };
  
    const handlePosterChange = (e) => {
      setPlaylistPoster(e.target.files[0]);
    };
  
    const handleSongChange = (index, field, value) => {
      const updatedSongs = [...songs];
      updatedSongs[index][field] = value;
      setSongs(updatedSongs);
    };
  
    const addSong = () => {
      setSongs([...songs, { name: '', poster: '', file: null }]);
    };
  
    const removeSong = (index) => {
      const updatedSongs = [...songs];
      updatedSongs.splice(index, 1);
      setSongs(updatedSongs);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Process the form submission here
      console.log('Playlist Name:', playlistName);
      console.log('Playlist Poster:', playlistPoster);
      console.log('Songs:', songs);


      // Reset the form
      setPlaylistName('');
      setPlaylistPoster(null);
      setSongs([{ name: '', poster: '', file: null }]);
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
        type="file"
        accept="image/*"
        id="playlistPoster"
        onChange={handlePosterChange}
      />

      <div className="songs">
        <label>Songs:</label>
        {songs.map((song, index) => (
          <div key={index}>
            <label htmlFor={`songName_${index}`}>Song Name:</label>
            <input
              type="text"
              id={`songName_${index}`}
              value={song.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            />

            <label htmlFor={`songPoster_${index}`}>Song Poster:</label>
            <input
              type="file"
              accept="image/*"
              id={`songPoster_${index}`}
              onChange={(e) => handleInputChange(index, 'poster', e.target.files[0])}
            />

            <label htmlFor={`songFile_${index}`}>Song File:</label>
            <input
              type="file"
              accept=".mp3"
              id={`songFile_${index}`}
              onChange={(e) => handleSongChange(index, 'file', e.target.files[0])}
            />

            <button type="button" onClick={() => removeSong(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addSong}>
          Add Song
        </button>
      </div>

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
    //home pop songs - search results
    //my library pop songs - query from db
    
    const [curr_cover , setTrackCover] = useRecoilState(curr_track_cover)
    const [pop_songs , setPopSongs] = useRecoilState(user_tracks)
    const [search_list, setSearchList] = useRecoilState(search_tracks)
    const [isPlaying , setIsPlaying] = useRecoilState(isPlayingState)
    const [currNavState , setNavState] = useRecoilState(nav_state)
    const [index_song , setSongIndex] = useRecoilState(index_song_list)
    const [currentList, setCurrentList] = useRecoilState(currentPlaylistState);


   
    

    const get_user_tracks = () => {
        let songs = []; 
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
        var urlencoded = new URLSearchParams();
        urlencoded.append("accessToken", localStorage["gram-jwt-token"]);
    
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };
    
        fetch("http://localhost:5000/api/tracks/usertracks", requestOptions)
        .then(response => response.json())
        .then((response) => {
            for(var i = 0; i<response.length; i++)
            {
                //download_track_cover(response[i]._id , response[i].trackcover_type)
                const cover_url = "http://localhost:5000/api/tracks/trackcover?accessToken=" + localStorage["gram-jwt-token"] + "&id=" + response[i]._id
                songs.push({'title': response[i].name, 'artist':response[i].artist_name, 'img':cover_url , 'track_id' : response[i]._id})
            }
            console.log(songs)
            setPopSongs(songs)
        })
        .catch((error) => {
        console.log(error);
        });

    }

    

    
   
    // for(let i = 1; i < 15; i++ )
    // {
    //     pop_songs.push({'title':'My Song'+i.toString(), 'artist':'artist'+i.toString(), 'img':myImg})
    // }

    const pop_artists = [];
    for(let i = 1; i < 15; i++ )
    {
        pop_artists.push({'name':'Artist'+i.toString(), 'img':artPic})
    }

    

    // react hooks --------------------------- START
    const [search,setSearch] = useState('');

    const get_search_tracks = () => {
        let songs = []; 
        console.log(search)
        console.log(localStorage["gram-jwt-token"])

        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/tracks/search?accessToken=" + localStorage["gram-jwt-token"] + "&searchTerm=" + search , requestOptions)
        .then(response => response.json())
        .then((response) => {
            for(var i = 0; i<response.length; i++)
            {
                let song = response[i];
                console.log(song.name)
                const cover_url = "http://localhost:5000/api/tracks/trackcover?accessToken=" + localStorage["gram-jwt-token"] + "&id=" + song._id
                songs.push({'title' : song.name ,'artist' : song.artist_name  , 'img' : cover_url , 'track_id' : song._id})
            }
            setSearchList(songs)
        })
        .catch((error) => {
        console.log(error);
        });

    }
    
    const handleSearchChange = (event) => { //every time value changes the search atom changes
        //every time it changes send an axios request to search 
        get_search_tracks(); 
        setSearch(event.target.value);
    };

    const handleSearchResult = () => {
        get_search_tracks(); 
    }



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
        let search_playlist = {'name': 'Search Results', 'songs':search_list}
        setCurrentList({...search_playlist})
        setActive(0);
        setwhichNav(0);
    };
    const toMyLib = () => {
        get_user_tracks()
        let user_playlist = {'name' : 'User Tracks' , 'songs':pop_songs}
        setCurrentList({...user_playlist})
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
    const playSong = (id , nav) => {
        setIsPlaying(false)
        console.log(id)
        let song; 
        if(nav >= 0){
            if(nav == 1){ 
                song = pop_songs[id]
            }
            else if(nav == 0){ 
                song = search_list[id]
            }

            setNavState(nav); 
            setSongIndex(id)
            
            setCurrentSong({
                title: song.title,
                artist: song.artist,
                poster: song.img,
                song: 'http://localhost:5000/api/tracks/downloadTrack?accessToken=' + localStorage["gram-jwt-token"] + "&id=" + song.track_id
            })
        }
        else
        {
            setCurrentSong({
                title: "Blinding Lights",
                artist: "The Weeknd",
                poster: artPic, 
                song: blindingsong
            })
        }
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
                    <BsSearch id="search-icon" onClick = {handleSearchResult}/>
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
                    <button id = "listen-now" onClick={() => playSong(-1 , -1)}>Listen Now</button>
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
                        {search_list.map((item,index) => (
                            <li key={index} className="song-item">
                                <div className="song-img">
                                    <img src={item.img} alt="" />
                                    <div className="song-play-btn"  onClick = {() => playSong(index , 0)}>
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
                                    <div className="song-play-btn" onClick = {() => playSong(index , 1)}>
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