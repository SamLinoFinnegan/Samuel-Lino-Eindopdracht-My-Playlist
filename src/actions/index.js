export const addSongToState = (event) => {
    event.preventDefault()

    const [inputName, inputArtist, inputGenre, inputRating] = event.target
    const newListItem = {
        id: undefined,
        name: inputName.value,
        artist: inputArtist.value,
        genre: inputGenre.value,
        rating: parseInt(inputRating.value),
    }
    return {
        type: "ADD_SONG_TO_STATE",
        payload: newListItem,
    }
}

export const deleteSongFromState = (id) => {
    return {
        type: "DELETE_SONG_FROM_STATE",
        payload: id,
    }
}

export const Sort = (event) => {
    return {
        type: "SORT_SONGS",
        payload: event.target.value,
    }
}