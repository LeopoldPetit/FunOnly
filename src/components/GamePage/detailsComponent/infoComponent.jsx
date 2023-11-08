// eslint-disable-next-line react/prop-types
import {useGame} from "../useGame.jsx";

export function InfosComponent() {
    const {game} = useGame();
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                <div className="h1 font-bold">Infos :</div>
                <p>
                    <ul>

                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Categorie : {game.infos.category}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Platforms : {game.infos.platforms.join(', ')}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>PEGI : {game.infos.pegi}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Editeurs : {game.infos.editors.join(', ')}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>WebSite : {game.infos.website}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Prix : {game.infos.price}</li>

                    </ul>
                </p>
            </div>
        </div>
    )
}