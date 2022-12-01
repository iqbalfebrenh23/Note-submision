import React from "react";
import {Route,Routes} from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
// import NoteList from "./NoteList";
// import NoteInput from "./NoteInput";
// import { getAllNotes } from "../utils/index";



function NoteApp() {
    return (
        
        <div className="note-app">
            <header className="note-app__header">
            <h1>Note List :V </h1>
            <Navigation />    
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/add" element={<AddPage />} />
                </Routes>
            </main>

        </div>
    );

}

export default NoteApp;