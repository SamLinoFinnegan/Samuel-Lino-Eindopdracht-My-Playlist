import React from "react"
import SongForm from "./components/SongForm"
import Logo from "./components/Logo"
import List from "./components/List"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="appContainer">
            <Logo />
            <SongForm />
            <List />
            <Footer />
        </div>
    )
}

export default App