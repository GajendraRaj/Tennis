import React, { useState, useEffect } from 'react';
import { Constants } from '../constants/Constants';

function Score(props) {
    const [score, setScore] = useState(Constants.INITIAL_SCORE);
    const { player1Score, player2Score } = props;
    
    useEffect(() => {
        const score = () => {
            const SCORE_LOOKUP = ["Love", "Fifteen", "Thirty", "Forty"];
                        
            if(player1Score === 1 || player2Score === 1) {
                return SCORE_LOOKUP[player1Score] + ', ' + SCORE_LOOKUP[player2Score]; 
            } else {
                return 'Love all';
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