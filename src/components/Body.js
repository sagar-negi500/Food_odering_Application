import React, { useEffect } from "react";
import resList from "../utils/mockdata";
import ResCards from "./Rescards";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./Rescards";
import userContext from "../utils/userContext";
import { useContext } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const {loggedinuser,setuserName}=useContext(userContext)

  const [name, setName] = useState("");
  const PromotedLabel=withPromotedLabel(ResCards);
  // console.log(PromotedLabel);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559"
      // "https://www.swiggy.com/mapi/homepage/getCards?lat=19.2553945&lng=72.86086750000001"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2553945&lng=72.86086750000001"
     
     " https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559",
    
    );
    const json = await data.json();

    console.log(json);
    // console.log(
    //   json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)

    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
  };
  return  (filteredRestaurant?.length ?? 0) === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="">
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 ml-4 rounded-lg"
          ></input>

          <button
            onClick={() => {
              const newlist = listOfRestaurant.filter((list) =>
                list.info.name.toLowerCase().includes(name.toLowerCase())
                // console.log("d")
              );
              setFilteredRestaurant(newlist);
            }}
            className="p-4 bg-slate-600  mt-4  mr-4 ml-4 rounded-lg"
          >
            filter
          </button>
            <labe className ="mr-2">name :</labe>
        <input value={loggedinuser} onChange={(e)=>{
          setuserName(e.target.value)

        }} className="border-2"></input>
        </div>

        <button
          onClick={() => {
            const newresList = resList.filter(
              (data) => data.info.avgRating > 4.4
            );
            // console.log(newresList)
            setListOfRestaurant(newresList);
          }}
          className="p-4 bg-slate-600  mt-4 ml-4 rounded-lg"
        >
          TopRatedRestaurant
        </button>
      </div>
      <div className="res-con flex flex-wrap">
        {filteredRestaurant.map((resturant) => (
          
          <Link key={resturant.info.id} to={"resmenu/"+resturant.info.id}>
            {resturant.info.promoted?<PromotedLabel  resData={resturant}/>:  <ResCards  resData={resturant} />}
          
            
            </Link>
          
        ))}
      </div>
    </>
  );
};

export default Body;
