
import { useParams } from 'react-router-dom';
import {ImageComponent} from "../components/GamePage/ImageComponent.jsx";
import {DetailsComponent} from "../components/GamePage/detailsComponent/detailsComponent.jsx";
import {VideoComponent} from "../components/GamePage/videoComponent.jsx";
import {CommentsComposent} from "../components/GamePage/commentsComposent.jsx";
import {useEffect, useState} from "react";
import {NaveBare} from "../components/HomePage/navebare.jsx";

export function GamePage() {
    const [gameData, setGameData] = useState(undefined)
    const params = useParams()
    useEffect(() => {

        fetch('http://localhost:3001/game/' + params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGameData(data);
            });
    }, []);


    if (!gameData) {
        return <div>Game not found</div>;
    }

    return (
        <div>
            <NaveBare/>
            <ImageComponent data={gameData}/>
            <DetailsComponent data={gameData}/>
            <VideoComponent data={gameData}/>
            <CommentsComposent/>
        </div>

    )
}



