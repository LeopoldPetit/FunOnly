// eslint-disable-next-line react/prop-types
export function InfosComponent({data}) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                <div className="h1 font-bold">Infos :</div>
                <p>
                    <ul>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Categorie : {data.infos.category}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Platforms : {data.infos.platforms.join(', ')}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>PEGI : {data.infos.pegi}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Editeurs : {data.infos.editors.join(', ')}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>WebSite : {data.infos.website}</li>
                        {/* eslint-disable-next-line react/prop-types */}
                        <li>Prix : {data.infos.price}</li>

                    </ul>
                </p>
            </div>
        </div>
    )
}