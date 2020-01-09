import React from "react";

const Description = props => {
    const {title, explanation} = props;
    return (
        <div className='header'>
         <h1>Today's Info Pic!</h1>
         <div className="logo_container">
        <img className="logo" src={logo} alt="studio ghibli official logo" />
        </div>
    )
}

export default Header;