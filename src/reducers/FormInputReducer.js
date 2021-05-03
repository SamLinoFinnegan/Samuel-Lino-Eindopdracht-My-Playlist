import stateArray from "../components/stateArray"

const stringCompare = (str1, str2) => {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    if (str1 > str2) return 1
    if (str2 > str1) return -1
    return 0
}
const numCompare = (num1, num2) => num1 - num2

const sortFunction = (newArray, key) => {
    const dataType = typeof newArray[0][key]
    const sortArray = (a, b) => {
        a = a[key]
        b = b[key]
        if (dataType === "string") return stringCompare(a, b)
        if (dataType === "number") return numCompare(a, b)
    }
    return sortArray
}


const formInputReducer = (state = stateArray, action) => {
    switch (action.type) {
        case "ADD_SONG_TO_STATE":
            const newItem = action.payload
            newItem.id = state.songs.length + 1

            return {
                ...state,
                songs: [newItem, ...state.songs],
            }

        case "DELETE_SONG_FROM_STATE":
            const indexNumber = state.songs.findIndex(
                (item) => item.id === action.payload
            )
            state.songs.splice(indexNumber, 1)
            state.songs.map((item, index) => {
                return (item.id = index + 1)
            })

            return {
                ...state,
                songs: [...state.songs],
            }

        case "SORT_SONGS":
            const arrayToSort = state.songs
            const [key, order] = action.payload.split(" ")
            const sortByOrder = (arrayToSort, key, order) => {
                const sortedArray = state.songs.sort(
                    sortFunction(arrayToSort, key)
                )
                if (order === "descending")
                    return sortedArray.reverse()

                return sortedArray
            }

            state.songs = sortByOrder(arrayToSort, key, order)

            return {
                ...state,
                songs: [...state.songs],
            }

        default:
            return state
    }
}
export default formInputReducer