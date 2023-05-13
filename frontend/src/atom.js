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

export const currentPlaylistState = atom({
    key: 'currentPlaylistState',
    default: null // Initial value for current_playlist
});