import React from "react"
import { SiRedux } from "react-icons/si"

const Logo = () => {
    return (
        <div className="logo-wrap">
            <SiRedux className="redux-icon" />
            <h1> - My Playlist - <span>with Redux</span></h1>
        </div>
    )
}
export default Logo