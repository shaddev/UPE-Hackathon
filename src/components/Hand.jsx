import fl1 from "../assets/fl1.png"
import fl2 from "../assets/fl2.png"
import fl3 from "../assets/fl3.png"
import fl4 from "../assets/fl4.png"

import fr1 from "../assets/fr1.png"
import fr2 from "../assets/fr2.png"
import fr3 from "../assets/fr3.png"
import fr4 from "../assets/fr4.png"

import sl1 from "../assets/sl1.png"
import sl2 from "../assets/sl2.png"
import sl3 from "../assets/sl3.png"
import sl4 from "../assets/sl4.png"

import sr1 from "../assets/sr1.png"
import sr2 from "../assets/sr2.png"
import sr3 from "../assets/sr3.png"
import sr4 from "../assets/sr4.png"

import blankImage from "../assets/blank.jpg"

export function Hand({handState, isLeft, playerId, clickHandler, isSelected}){

    const style = isSelected ? {borderColor: "blue", borderWidth: "5px", borderStyle: "solid"} : {}

    const images = [[[blankImage, fl1, fl2, fl3, fl4], [blankImage, fr1, fr2, fr3, fr4]],
                    [[blankImage, sl1, sl2, sl3, sl4], [blankImage, sr1, sr2, sr3, sr4]]]

    function getImage(){
        return images[playerId][isLeft][handState]
    }

    return <div style={style} onClick={() => clickHandler(handState)}> 
        <img src={getImage()}></img>
    </div>
}