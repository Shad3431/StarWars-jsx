import React, { useEffect, useState } from 'react';
import { base_url } from "../utils/constants.jsx";

const AboutMe = () => {
    const [person, setPerson] = useState({});

    useEffect(() => {
        fetch(`${base_url}v1/peoples/1`)
            .then(response => response.json())
            .then(data => setPerson(data));
    }, []);

    return (
        <div>
            <p>name: {person.name}</p>
            <p>Height: {person.height}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
        </div>
    );
};

export default AboutMe;