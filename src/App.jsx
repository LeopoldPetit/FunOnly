
import './assets/App.css'
import {ImageComponent} from './components/GamePage/ImageComponent.jsx';
import {useEffect, useState} from "react";
import {DetailsComponent} from "./components/GamePage/detailsComponent/detailsComponent.jsx";
import {VideoComponent} from "./components/GamePage/videoComponent.jsx";
import {CommentsComposent} from "./components/GamePage/commentsComposent.jsx";


function App() {

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
       <ImageComponent data ={gameData}/>
       <DetailsComponent data={gameData}/>
       <VideoComponent data={gameData} />
       <CommentsComposent/>
   </div>
  )
}

export default App
