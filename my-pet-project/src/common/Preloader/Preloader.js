import preloader from '../../assets/images/preloader.svg';
import React from 'react';

const Preloader = (props) => {
    return (
        <div style={{marginLeft: 510}}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;