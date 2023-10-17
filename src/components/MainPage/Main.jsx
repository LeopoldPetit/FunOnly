
import {useEffect, useState} from "react";
import {CardsComponents} from "./CardsComponents.jsx";
import {ImageComponent} from "../GamePage/ImageComponent.jsx";  // eslint-disable-next-line react/prop-types

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
        <div className="flex items-center justify-center h-screen w-screen">

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-auto">
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div><div>
                <CardsComponents data={gameData}/>
            </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div><div>
                <CardsComponents data={gameData}/>
            </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div><div>
                <CardsComponents data={gameData}/>
            </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>
                <div>
                    <CardsComponents data={gameData}/>
                </div>

            </div>
        </div>

    )
}

export default Main;
