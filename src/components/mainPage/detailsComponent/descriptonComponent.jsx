// eslint-disable-next-line react/prop-types
export function DescriptionComponent({data}) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                <div className="h1 font-bold">Description :</div>
                <p>
                    {/* eslint-disable-next-line react/prop-types */}
                    {data.infos.description}
                </p>
            </div>
        </div>
    )
}
