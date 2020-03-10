import React, { useState } from 'react';
import { Constants } from '../constants/Constants';
import Player from './Player';
import Score from '../components/Score';

function TennisGame() {
    const state = {
        player1Score: 0,
        player2Score: 0
    }
    const [score, setScore] = useState(state);
    const [isGameOver, setIsGameOver] = useState(false);

    const incrementScore = (player) => {
        if(player === 'Player 1') {
            setScore(prevState => ({
                ...prevState,
                player1Score: prevState.player1Score + 1
            }));
        } else {
            setScore(prevState => ({
                ...prevState,
                player2Score: prevState.player2Score + 1
            }));                
        }
    }

    const notifyGameOver = () => {
        setIsGameOver(true);
    }

    const resetGame = () => {
        setScore({player1Score: 0,
            player2Score: 0
        });
        setIsGameOver(false);
    }

    return (
        <div>
            <div className="playerContainer">
                <div className="leftContainer">
                    <Player name={Constants.PLAYER1_NAME} onUpdateScore={incrementScore} isGameOver={isGameOver} />
                </div>
                <Player name={Constants.PLAYER2_NAME} onUpdateScore={incrementScore} isGameOver={isGameOver} />
            </div>
            <Score player1Score={score.player1Score} player2Score={score.player2Score} onGameOver={notifyGameOver} />
            <br /><button onClick={resetGame}>{Constants.RESET_BUTTON_TEXT}</button>
        </div>
    );
}

export default TennisGame;