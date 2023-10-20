
import {CardsComponents} from "../components/HomePage/CardsComponents.jsx";
import { NavLink, useLoaderData,} from "react-router-dom";
import {NaveBare} from "../components/HomePage/navebare.jsx";



// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    try {
        const response = await fetch('http://localhost:3001/games');

        if (!response.ok) {
            throw new Error('Network response was not ok for all data');
        }

        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}

// eslint-disable-next-line react/prop-types
export function HomePage() {
    const { data } = useLoaderData();
    return (
        <div>
            <NaveBare/>
            <div className={"flex justify-center items-start flex-wrap"}>
                {data.map((gameData) => {
                    return (
                        <NavLink to={`/game/${gameData.id}`} className={"m-2"}>
                            <CardsComponents data={gameData}/>
                        </NavLink>
                    )
                })}
            </div>
        </div>

    )
}



