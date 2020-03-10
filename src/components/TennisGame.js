import React from 'react';
import { Constants } from '../constants/Constants';
import Player from './Player';
import Score from '../components/Score';

function TennisGame() {
    return (
        <div>
            <div>
                <Player name={Constants.PLAYER1_NAME} />
                <Player name={Constants.PLAYER2_NAME} />
            </div>
            <Score />
        </div>
    );
}

export default TennisGame;