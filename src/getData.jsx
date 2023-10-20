import {useParams} from "react-router-dom";
import {useEffect} from "react";


export async function fetchAllData() {
    try {
        const response = await fetch('http://localhost:3001/games');

        if (!response.ok) {
            throw new Error('Network response was not ok for all data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function fetchGameData() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        fetch('http://localhost:3001/game/' + params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return(data);
            });
    }, [params.id]);


}





