
import {useNavigate, useParams} from 'react-router-dom';
import {ImageComponent} from "../components/GamePage/ImageComponent.jsx";
import {DetailsComponent} from "../components/GamePage/detailsComponent/detailsComponent.jsx";
import {VideoComponent} from "../components/GamePage/videoComponent.jsx";
import {CommentsComposent} from "../components/GamePage/commentsComponent/commentsComposent.jsx";
import {useEffect, useState} from "react";
import {NavebareGamePage} from "../components/GamePage/navebareGamePage.jsx";
import {GameContextProvider, useGame} from "../components/GamePage/useGame.jsx";

export function GamePage() {
    return (
        <div className={"App"}>
            <GameContextProvider>
                <GameInnerPage/>
            </GameContextProvider>
        </div>
    );
}
function GameInnerPage() {
    const params = useParams()
    const navigate = useNavigate()
    const {game, loadGame, isLoading} = useGame();
    useEffect(() => {
        loadGame(params.id)
    }, []);
    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <NavebareGamePage/>
            <ImageComponent />
            <DetailsComponent />
            <VideoComponent />
            <CommentsComposent/>

        </div>
    )
}



