
import '../../assets/imagecomponent.css'
// eslint-disable-next-line react/prop-types
export function ImageComponent({data}) {
    return (

        <div className="header-container">
            <img
                className="full-width-image"
                /* eslint-disable-next-line react/prop-types */
                src={data.infos.image}
                alt="Description de l'image"
            />
        </div>
    )
}