import React from 'react'
import SongsList from './components/SongsList';
import { fetchSongs } from './redux/actions';


const App = () => {
    return (
        <>
            <SongsList />
        </>
    )
}

export default App
