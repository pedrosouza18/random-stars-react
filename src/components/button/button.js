import React from 'react';
import './button.css';

const button = (props) => {
    return (
        <div className="box-btn">
            <button className="box-btn__btn" onClick={props.click}>Next</button>
        </div>
    );
}

export default button;