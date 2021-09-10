import React from 'react'
import { connect } from 'react-redux';


const SongsList = (props) => {
    console.log(props)

    function redorList(){
        return props.songs.map(song => {
            return(
                <div key={song.title}>
                    <h4>{song.title}</h4>
                    <p>{song.duration}</p>
                </div>
            )
        })
    }

    return (
        <div>
            {redorList()}
        </div>
    )
}

const mapStateToProps = state =>{
    // console.log(state);

    return { songs: state.songs}
}

export default connect(mapStateToProps)(SongsList);
