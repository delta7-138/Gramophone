import "./menu.css"
import profile_pic from "../images/profile.png"
import myImg from "../images/login_background.jpg"
import artPic from "../images/blw.png"
import { BsSearch, BsPlayCircleFill } from "react-icons/bs"
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai"
import { useState } from "react";

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

    const [search,setSearch] = useState('');
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="menu-side">
            <nav>
                <ul>
                    <li>Home<span></span></li>
                    <li>My Library</li>
                    <li>Downloads</li>
                </ul>
                
                <div className="search-bar">
                    <BsSearch id="search-icon"/>
                    <input type={"text"} value={search} 
                            onChange={handleSearchChange}
                            placeholder="Search.." id=""
                    />
                </div>

                <div className="user-profile">
                    <img src={profile_pic} alt=""/>
                </div>
            </nav>
            <div className="content">
                <h1>Blinding Lights</h1>
                <p>by The Weekend</p>
                <p>Most Listened song on Gramophone</p>
                <div className="content-btns">
                    <button id = "listen-now">Listen Now</button>
                    <button id = "add-playlist">Add to Playlist</button>
                </div>
            </div>

            <div className="popular">
                <div className="H4">
                    <h4>Popular Songs</h4>
                    <div className="popular-btns">
                        <AiOutlineCaretLeft />
                        <AiOutlineCaretRight />
                    </div>
                </div>
                <div className="pop-songs">
                    {pop_songs.map((item,index) => (
                        <li className="song-item">
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
                            <AiOutlineCaretLeft />
                            <AiOutlineCaretRight />
                        </div>
                    </div>
                    <div className="artists">
                        {pop_artists.map((item,index) => (
                            <li className="song-item">
                                <img src={item.img} alt="" />
                            </li>
                        ))}
                    </div>
            </div>

        </div>
    )
}

export default Menu;