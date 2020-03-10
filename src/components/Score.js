import React, { useState, useEffect } from 'react';
import { Constants } from '../constants/Constants';

function Score() {
    return (
        <div>
            <h5>{Constants.SCORER_HEADER}</h5>
            <label>{Constants.INITIAL_SCORE}</label>
        </div>
    );        
}

export default Score;