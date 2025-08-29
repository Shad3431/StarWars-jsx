import React from 'react';
import main from "../images/main.jpg";
import {useParams} from "react-router";
import {characters} from "../utils/characters.js";

const Hero = ({heroId}) => {


    return (
        <section className="float-start w-25">
            <img className="w-100" src={characters[heroId].img} alt="hero"/>
        </section>
    );
};

export default Hero;