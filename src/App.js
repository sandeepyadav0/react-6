import React from "react";
import './App.css';



import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import ContactMe from './Components/ContactMe/ContactMe';
import Education from './Components/Education/Education';


const App = () => {
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        About / >
        <
        Skills / >
        <
        Projects / >
        <
        Education / >
        <
        ContactMe / >

        <
        /div>
    );
};

export default App;