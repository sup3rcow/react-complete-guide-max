import React from 'react';

const person = (props) => { // functional based component
    return (
        <div>
            <p>I'm a person, name: {props.name}, age: {props.age}.</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
