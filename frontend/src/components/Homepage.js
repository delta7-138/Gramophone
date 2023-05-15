import "./homepage.css"
import Playlist from "./Playlist";
import SongPlayer from "./SongPlayer";
import Menu from "./Menu";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';


function Homepage()
{
    
    let isLoggedIn; 
    const navigate = useNavigate();
    if(localStorage.getItem("gram-jwt-token") == null){
        isLoggedIn = false; 
        navigate("/")
    }

    axios.post('http://localhost:5000/api/users/jwtSignIn', 
    {
        accessToken : localStorage.getItem("gram-jwt-token")
    }, {
        headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
    }})
    .then(res => {
        console.log(res.data)
        isLoggedIn = true
    })
    .catch(err => {
        console.log("could not log in")
        console.log(err)
        isLoggedIn = false
        navigate("/")
    })

    return(
        <div>
        {isLoggedIn ? (navigate("/")
        ) : (
        <div className="homepage-container">
                <div className="playlist">
                    <Playlist />
                </div>
                <div className="home-side">
                    <Menu />
                </div>
                <div className="song-player">
                    <SongPlayer />
                </div> 
        </div> 
        )}
        </div>
    );
}

export default Homepage;