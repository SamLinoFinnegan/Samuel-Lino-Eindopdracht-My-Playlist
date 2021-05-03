import React from "react"
import ListItem from "./ListItem"
import { useSelector } from "react-redux"
import ToSort from "./ToSort"

const List = () => {
    const listItems = useSelector((state) => state.songList.songs)
    const updatedListItems = listItems.map((item) => {
        return <ListItem key={item.id} item={item} />
    })
    return (
        <div className="songlist-info-wrap">
            <div className="list-header">
                <ToSort />
            </div>
            <ul className="song-list">{updatedListItems}</ul>
        </div>
    )
}
export default List