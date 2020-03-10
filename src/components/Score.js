import React, { useState, useEffect } from 'react';
import { Constants } from '../constants/Constants';

function Score(props) {
    return (
        <div>
            <h5>{Constants.SCORER_HEADER}</h5>
        </div>
    );        
}

export default Score;