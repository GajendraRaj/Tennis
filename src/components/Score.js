import React, { useState, useEffect } from 'react';
import { Constants } from '../constants/Constants';

function Score(props) {
    const [score, setScore] = useState(Constants.INITIAL_SCORE);
    const { player1Score, player2Score, onGameOver } = props;
    
    useEffect(() => {
        const score = () => {
            const SCORE_LOOKUP = ["Love", "Fifteen", "Thirty", "Forty"];
            const isPlayersScoreEqual = player1Score === player2Score;
            const isDeuce = player1Score >= 3;
            const isPlayerScoredMorethanLookUpScore = player1Score > 3 || player2Score > 3;
            const isAdvantage = Math.abs(player1Score - player2Score) === 1;
            const player = player1Score > player2Score ? 'Player 1' : 'Player 2'
            
            if(isPlayersScoreEqual) {
                if(isDeuce) {
                    return 'Deuce';
                }
                return SCORE_LOOKUP[player1Score] + ' all';;
            } else if (isPlayerScoredMorethanLookUpScore) {
                if(isAdvantage) {
                    return `Advantage ${player}`;
                }
                onGameOver();
                return `${player} wins`; 
            } else {
                return SCORE_LOOKUP[player1Score] + ', ' + SCORE_LOOKUP[player2Score]; 
            }
        };
        setScore(score);
    }, [player1Score, player2Score, onGameOver ]);

    return (
        <div>
            <h5>{Constants.SCORER_HEADER}</h5>
            <label>{score}</label>
        </div>
    );        
}

export default Score;