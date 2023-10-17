import {DescriptionComponent} from "./descriptonComponent.jsx";
import {InfosComponent} from "./infoComponent.jsx";

// eslint-disable-next-line react/prop-types
export function DetailsComponent({data}){
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