import React from "react"
import { MdAudiotrack } from "react-icons/md"
import { IoReorderFourOutline } from "react-icons/io5"
import { RiGroupLine } from "react-icons/ri"
import { Sort } from "../actions"
import { useDispatch } from "react-redux"

function ToSort(props) {
    const dispatch = useDispatch()
    return (
        <div className="sort-container">
            {/* for mobile - One select group */}
            <select
                className="select-sort-mobile"
                onChange={(event) => {
                    dispatch(Sort(event))
                }}
                name="sort"
            >
                <option defaultValue> Sort by: Choose</option>
                <optgroup label="Sort by: Song name">
                    <option value="name ascending">
                        a - z
					</option>
                    <option value="name descending">
                        z - a
					</option>
                </optgroup>

                <optgroup label="Sort by: Artist name">
                    <option value="artist ascending">
                        a - z
					</option>
                    <option value="artist descending">
                        z - a
					</option>
                </optgroup>

                <optgroup label="Sort by: Genre">
                    <option value="genre ascending">
                        a - z
					</option>
                    <option value="genre descending">
                        z - a
					</option>
                </optgroup>

                <optgroup label="Sort by: Rating">
                    <option value="rating descending">
                        High - Low
					</option>
                    <option value="rating ascending ">
                        Low - High
					</option>
                </optgroup>
            </select>

            {/* for desktop by group*/}
            {/* group 1 */}
            <div className="sortbox">
                <p>
                    <MdAudiotrack className="icon-li" />
                </p>
                <select
                    className="select-sort"
                    onChange={(event) => {
                        dispatch(Sort(event))
                    }}
                    name="sort"
                >
                    <option defaultValue> Song</option>
                    <optgroup label="Sort by: Song name">
                        <option value="name ascending">
                            a - z
						</option>
                        <option value="name descending">
                            z - a
						</option>
                    </optgroup>
                </select>
            </div>
            {/* group 2 */}
            <div className="sortbox">
                <p>
                    <RiGroupLine className="icon-li" />
                </p>
                <select
                    className="select-sort"
                    onChange={(event) => {
                        dispatch(Sort(event))
                    }}
                    name="sort"
                >
                    <option defaultValue> Artist</option>
                    <optgroup label="Sort by: Artist name">
                        <option value="artist ascending">
                            a - z
						</option>
                        <option value="artist descending">
                            z - a
						</option>
                    </optgroup>
                </select>
            </div>
            {/* group 3 */}
            <div className="sortbox">
                <p>
                    <IoReorderFourOutline className="icon-li" />
                </p>
                <select
                    className="select-sort"
                    onChange={(event) => {
                        dispatch(Sort(event))
                    }}
                    name="sort"
                >
                    <option defaultValue> Genre</option>
                    <optgroup label="Sort by: Genre">
                        <option value="genre ascending">
                            a - z
						</option>
                        <option value="genre descending">
                            z - a
						</option>
                    </optgroup>
                </select>
            </div>
            {/* group 4 */}
            <div className="sortbox">
                <p> ★ </p>
                <select
                    className="select-sort"
                    onChange={(event) => {
                        dispatch(Sort(event))
                    }}
                    name="sort"
                >
                    <option defaultValue> Rating</option>
                    <optgroup label="Sort by: Rating">
                        <option value="rating descending">
                            High - Low
						</option>
                        <option value="rating ascending ">
                            Low - High
						</option>
                    </optgroup>
                </select>
            </div>
        </div>
    )
}
export default ToSort