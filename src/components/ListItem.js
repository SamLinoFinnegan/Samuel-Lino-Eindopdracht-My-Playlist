import React from "react"
import { IoTrashBinOutline } from "react-icons/io5"
import { RiGroupLine } from "react-icons/ri"
import { MdAudiotrack } from "react-icons/md"
import { IoReorderFourOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { deleteSongFromState } from "../actions"

const ListItem = (props) => {
    const dispatch = useDispatch()
    return (
        <li>
            <div className="li-song-name">
                <MdAudiotrack className="icon-li" />
                {props.item.name}
            </div>
            <div className="li-artist">
                <RiGroupLine className="icon-li" />
                {props.item.artist}
            </div>

            <div className="li-genre">
                <IoReorderFourOutline className="icon-li" />
                {props.item.genre}
            </div>

            <div className="li-rating">
                {props.item.rating === 1 && "★"}
                {props.item.rating === 2 && "★★"}
                {props.item.rating === 3 && "★★★"}
                {props.item.rating === 4 && "★★★★"}
                {props.item.rating === 5 && "★★★★★"}
            </div>
            <div className="li-video">
                {props.item.video ? <a href={props.item.video} > Watch Video </a> : ""}
            </div>
            <IoTrashBinOutline
                className="deleteBtn"
                onClick={() => {
                    dispatch(
                        deleteSongFromState(
                            props.item.id
                        )
                    )
                }}
            />
        </li>
    )
}

export default ListItem