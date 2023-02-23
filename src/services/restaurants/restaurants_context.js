import React, {useState,useContext, createContext, useEffect, useMemo, Children}from 'react'
import { restaurantRequest, restaurantsTransform } from './restaurants_services'
import { LocationContext } from './../location/location.context';

export const Restaurants_context = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurant, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
        restaurantRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
    return (
    <Restaurants_context.Provider value={{
        restaurant,
        isLoading,
        error,
    }}>
        {children}
    </Restaurants_context.Provider>
    )
}