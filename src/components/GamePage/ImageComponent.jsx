
import '../../assets/imagecomponent.css'
import {useGame} from "./useGame.jsx";
// eslint-disable-next-line react/prop-types
export function ImageComponent() {
    const {game} = useGame();
    return (

        <div className="header-container">
            <img
                className="full-width-image"
                /* eslint-disable-next-line react/prop-types */
                src={game.infos.image}
                alt="Description de l'image"
            />
        </div>
    )
}