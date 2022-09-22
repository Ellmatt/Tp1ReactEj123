import React from 'react';

const Saludo = (props) => {
    return (
        <div>
            <h2>Hello {props.nuevosaludo}!</h2>
        </div>
    );
};

export default Saludo;