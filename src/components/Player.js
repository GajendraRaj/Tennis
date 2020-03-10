import React from 'react';
import { Constants } from '../constants/Constants';

function Player(props) {
    return (
        <div>
            <h5>{props.name}</h5>
            <button>{Constants.PLAYER_BUTTON_TEXT}</button>
        </div>
    );
}

export default Player;