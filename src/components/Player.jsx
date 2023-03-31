import { useState } from "react"
import {Hand} from './Hand'

export function Player({handState, id, actionHandler}){

    const [targets, setTargets] = useState([null, null]);

    function addTargets(target){
        if (targets[0] === null){
            setTargets([target, null]);
        } else {
            actionHandler("hit", [targets[0], target]);
            setTargets([null, null]);
        }
    }

    return <>
        <Hand isLeft={0} playerId={id} handState={handState[0]} clickHandler={addTargets} isSelected={targets[0] === 0}/>
        <Hand isLeft={1} playerId={id} handState={handState[0]} clickHandler={addTargets} isSelected={targets[0] === 1}/>
    </>
}
