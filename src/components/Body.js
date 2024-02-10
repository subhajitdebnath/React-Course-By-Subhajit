import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { LOADER_IMG_URL } from "../utils/constant";

const Body = () => {
    // let listOfRestaurant = restList;
    // console.log(listOfRestaurant);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        console.log("UseEffect");
        fetchRestData();
    }, []);

    console.log("Render");

    const fetchRestData = async () => {
        // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001").then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err.message);
        // }).finally(() => {
        //     console.log("something else");
        // });

        const respose = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001");
        const data = await respose.json();
        console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurant.length === 0 ? (
        <div className="full-width">
            <img className='loader' src={LOADER_IMG_URL} />
        </div>
    ) : (
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