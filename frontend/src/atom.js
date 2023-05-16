// atoms.js
import { atom } from 'recoil';

export const currentSongState = atom({
    key: 'currentSongState',
    default: {
        title : '',
        artist : '',
        poster : '',
        song : null,
    }, // Initial value for current_song
});

export const currentPlaylistState   = atom({
    key: 'currentPlaylistState',
    default: null // Initial value for current_playlist
});

export const prevPlaylistState = atom({
    key: 'prevPlaylistState',
    default: null // Initial value for prev_playlist
});

export const user_tracks = atom({
    key: 'user_tracks', 
    default : [], 
})

export const curr_track_cover = atom({
    key : "curr_track_cover", 
    default : ""
})

export const isPlayingState = atom({
    key : "playing", 
    default : false
})

export const search_tracks = atom({
    key : "search tracks", 
    default : []
})

export const index_song_list = atom({
    key : "index song list", 
    default : 0
})

export const nav_state = atom({
    key : "nav state", 
    default : 0
})