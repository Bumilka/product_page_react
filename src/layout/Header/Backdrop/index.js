import React from 'react';
import './style.scss';

const backdrop = props => (
    <div className='backdrop' onClick={props.click} />
);

export default backdrop;