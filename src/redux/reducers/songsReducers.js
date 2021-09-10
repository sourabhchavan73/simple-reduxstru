export const songsReducers = () => {
    return[
        {
            title: "backstrreta boys", duration: 50
        },
        {
            title: "backstrrest boys", duration: 50
        },
        {
            title: "backstrret boys", duration: 50
        },
        {
            title: "backstrreft boys", duration: 50
        }
    ]
}

export const fetchSongsList = (state = songsReducers, action) => {
    if(action.type === "FETCH_SONGS"){
        return action.payload
    }

    return state
}