import React from "react";

const Description = props => {
    const {title, explanation} = props;
    return (
        <div className='description'>
            <h3>Title: {title}</h3>
            <p>{explanation}</p>
        </div>
    )
}

export default Footer;