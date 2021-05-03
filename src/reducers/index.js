import FormInputReducer from "./FormInputReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    songList: FormInputReducer,
})

export default allReducers