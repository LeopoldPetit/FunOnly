import {DescriptionComponent} from "./descriptonComponent.jsx";
import {InfosComponent} from "./infoComponent.jsx";
import '../../../assets/App.css'
import {useGame} from "../useGame.jsx";


// eslint-disable-next-line react/prop-types
export function DetailsComponent(){
    const {data} = useGame()
    return(
        <div className={" flex justify-space-between mx-auto mt-11"}>
            <div className={"textComponent flex-1 ml-3 mr-3"}>
                <DescriptionComponent  data ={data}/>
            </div>
            <div className={"textComponent flex-1 ml-3 mr-3"}>
                <InfosComponent  data ={data} />
            </div>
        </div>
    )
}