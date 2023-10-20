// eslint-disable-next-line react/prop-types
export function CardsComponents({data}){
    return(
        <a href="#">
            <div className="max-w-sm bgColor2 border borderColor rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-lg">
                <img className="rounded-t-lg" src={data.infos.image} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight textColor">{data.infos.name}</h5>
                    <p className="mb-3 font-normal text-white">{data.infos.description}</p>
                </div>
            </div>
        </a>
    )
}