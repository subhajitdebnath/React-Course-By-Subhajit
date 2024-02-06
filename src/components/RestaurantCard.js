import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {

    // console.log(props)
    const {
        name,
        avgRatingString,
        sla,
        cloudinaryImageId
    } = props.restInfo.info;

    return (
        <div className='restaurant-card' id={props.id}>
            <img className='restaurant-card-logo' src={CDN_URL + cloudinaryImageId} />
            <div>{name}</div>
            <div>
                <div>Rating: {avgRatingString}</div>
                <div>{sla?.slaString} Mins</div>
            </div>
        </div>
    )
}

export default RestaurantCard;