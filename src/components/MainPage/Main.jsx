
import {useEffect, useState} from "react";
import {CardsComponents} from "./CardsComponents.jsx";


function Main() {

    const [gameData, setGameData] = useState(undefined)
    useEffect(() => {
        fetch('http://localhost:3001/game/3')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGameData(data);
            });
    }, []);
    if(gameData === undefined) {
        return <div>Loading...</div>
    }


    return (

        <div>
            <CardsComponents data={gameData}/>
        </div>
    )
}

export default Main;
