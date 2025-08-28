import React from 'react';

import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import Hero from "./Hero.jsx";
const Home = () => {
    return (
        <main className="clearfix">
           <Hero/>
           <DreamTeam/>
            <FarGalaxy/>

        </main>
    );
};

export default Home;