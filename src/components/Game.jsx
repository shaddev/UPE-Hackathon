import { useState } from "react"
import {Player} from './Player'

export function Game(){

    const [gameState, setGameState] = useState([[1, 1], [1, 1]])
    const [currentTurn, setCurrentTurn] = useState(0);

    const checkWin = (gameState, sourcePlayer) => {
        if(gameState[+ !sourcePlayer][0] === 0 && gameState[+ !sourcePlayer][1] === 0){
            alert("Someone won!");
        }
    }

    const actionHandler = (action, targets, sourcePlayer) => {
        if (action === "hit"){
            const newGameState = gameState.clone();
            newGameState[+ !sourcePlayer][targets[1]] += gameState[sourcePlayer][targets[0]];
            newGameState[+ !sourcePlayer][targets[1]] %= 5;
            checkWin(newGameState, sourcePlayer);
            setGameState(newGameState);
        } else if (action === "split"){
            
        }
    }

    return <>
        <Player handstate={gameState[0]} id={0} actionHandler={actionHandler} />
        <Player handstate={gameState[1]} id={1} actionHandler={actionHandler} />
    </>
}