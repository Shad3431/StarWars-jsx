import React, {useEffect, useState} from 'react';

import {characters} from "../utils/characters.js";



const AboutMe = ({hero}) => {
    const [heroData, setHeroData] = useState({});
    const period=1000*60*60*24;
    useEffect(() => {
        const heroStorage= JSON.parse(localStorage.getItem(characters[hero].name))
        if(heroStorage && (Date.now()-heroStorage.time)<period) {
            setHeroData(heroStorage.payload)
        }else {
            fetch(`${characters[hero].url}`)
                .then(response => response.json())
                .then(data => {
                    setHeroData(data);
                    const info={
                        payload:data,
                        time: Date.now()
                    }
                    localStorage.setItem(characters[hero].name, JSON.stringify(info))
                })
        }

    }, [hero]);
    //TODO with * use sessionStorage or localStorage for save requests on 24 hours
    return (
        <div>
            <p>Name:{heroData.name}</p>
            <p>Height:{heroData.height}</p>
            <p>Birth Year:{heroData.birth_year}</p>
            <p>Gender:{heroData.gender}</p>
            <p>Mass: {heroData.mass}</p>
            <p>Skin color: {heroData.skin_color}</p>
            <p>Eye color: {heroData.eye_color}</p>


        </div>

    );
};

export default AboutMe;