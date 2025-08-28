import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants.jsx";


const AboutMe = () => {
    const [hero, setHero] = useState({});
    const period=1000*60*60*24;
    useEffect(() => {
        const heroStorage= JSON.parse(localStorage.getItem("luke"))
        if(heroStorage && (Date.now()-heroStorage.time)<period) {
            setHero(heroStorage.payload)
        }else {
            fetch(`${base_url}v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    setHero(data);
                    const info={
                        payload:data,
                        time: Date.now()
                    }
                    localStorage.setItem("luke", JSON.stringify(info))
                })
        }

    }, []);
    //TODO with * use sessionStorage or localStorage for save requests on 24 hours
    return (
        <div>
            <p>Name:{hero.name}</p>
            <p>Height:{hero.height}</p>
            <p>Birth Year:{hero.birth_year}</p>
            <p>Gender:{hero.gender}</p>
            <p>Mass: {hero.mass}</p>
            <p>Skin color: {hero.skin_color}</p>
            <p>Eye color: {hero.eye_color}</p>


        </div>

    );
};

export default AboutMe;