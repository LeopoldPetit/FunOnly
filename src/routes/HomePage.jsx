
import {CardsComponents} from "../components/MainPage/CardsComponents.jsx";
import {Link, NavLink, useLoaderData,} from "react-router-dom";
import {fetchAllData} from "../getData.jsx";


// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    const data = await fetchAllData();
    return { data };
}

// eslint-disable-next-line react/prop-types
export function HomePage() {
    const { data } = useLoaderData();

    return (
        <div className="flex items-center justify-center h-screen w-screen">

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-auto">
                {data.map((gameData) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <NavLink to={`/game/${gameData.id}`}>
                            <CardsComponents data={gameData}/>
                        </NavLink>
                    )
                })}


            </div>
        </div>

    )
}



