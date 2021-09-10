import { combineReducers } from 'redux';
import { songsReducers, fetchSongsList } from './songsReducers'

export default combineReducers({
    songs: songsReducers,
    songList: fetchSongsList
})