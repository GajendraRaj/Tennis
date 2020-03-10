import React from 'react';
import { Constants } from '../constants/Constants';
import Player from './Player';

function TennisGame() {
    return (
        <div>
            <div>
                <Player name={Constants.PLAYER1_NAME} />
                <Player name={Constants.PLAYER2_NAME} />
            </div>
        </div>
    );
}

export default TennisGame;