
export const fetchSongs = (songs) => {
    return {
        type: "FETCH_SONGS",
        payload: songs
    }
}
