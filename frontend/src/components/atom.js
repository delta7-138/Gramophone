// atoms.js
import { atom } from 'recoil';

export const currentSongState = atom({
  key: 'currentSongState',
  default: null, // Initial value for current_song
});

export const currentPlaylistState = atom({
  key: 'currentPlaylistState',
  default: {}, // Initial value for current_playlist
});