import React from 'react';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./container/LandingPage.jsx";
import AboutPage from "./container/AboutPage.jsx";
import SkillsPage from "./container/SkillsPage.jsx";
import ProjectsPage from "./container/ProjectsPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
    );
};

export default App;