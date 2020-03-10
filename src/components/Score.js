import React, { useState, useEffect } from 'react';
import { Constants } from '../constants/Constants';

function Score(props) {
    const [score, setScore] = useState(Constants.INITIAL_SCORE);
    const { player1Score, player2Score } = props;
    
    useEffect(() => {
        const score = () => {
            const SCORE_LOOKUP = ["Love", "Fifteen", "Thirty", "Forty"];
            const isPlayersScoreEqual = player1Score === player2Score;
            const player = player1Score > player2Score ? 'Player 1' : 'Player 2'
            
            if(isPlayersScoreEqual) {
                return SCORE_LOOKUP[player1Score] + ' all';;
            } else {
                return SCORE_LOOKUP[player1Score] + ', ' + SCORE_LOOKUP[player2Score]; 
            }
        };
        setScore(score);
    }, [player1Score, player2Score ]);

    return (
        <div>
            <h5>{Constants.SCORER_HEADER}</h5>
            <label>{score}</label>
        </div>
    );        
}

export default Score;