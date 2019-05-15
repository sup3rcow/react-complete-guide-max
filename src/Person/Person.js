import React from "react";
import './Person.css'; // kazes web-pack-u da css fajl postoji pa ce se css primjeniti

const person = (props) => { // functional based component
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a person, name: {props.name}, age: {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;
