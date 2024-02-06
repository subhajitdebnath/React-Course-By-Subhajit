import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Image, Shimmer } from 'react-shimmer'

const Body = () => {
    // let listOfRestaurant = restList;
    // console.log(listOfRestaurant);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        console.log("useeffect");

        getData();
    }, []);

    const getData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // console.log(data);
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    console.log('render')

    if(listOfRestaurant.length === 0) {
        return (
            <div className='body-container'>
                <div className='restaurant-container'>
                    {
                        [1, 2, 3, 4, 5, 6].map(item => <Image src='https://source.unsplash.com/random/800x600' fallback={<Shimmer width={150} height={250} />}/>)
                    }
                </div>
            </div>
        )
    }

    return (
        <div className='body-container'>
            <div className='search-container'>
                <input type='text'/>
                <button>Search</button>
                <button onClick={() => {
                    let filteredData = listOfRestaurant.filter(res => res.info.avgRating >= 4.5);
                    setListOfRestaurant(filteredData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} restInfo = {restaurant} id={restaurant.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;


// Diff Algorithm, Reconcilliation Algo, React Fibre