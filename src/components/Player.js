import React from 'react';
import { Constants } from '../constants/Constants';

function Player(props) {
    const onUpdateScore = () => {
        props.onUpdateScore(props.name);
    }
    
    return (
        <div>
            <h5>{props.name}</h5>
            <button onClick={onUpdateScore}>{Constants.PLAYER_BUTTON_TEXT}</button>
        </div>
    );
}

export default Player;