import React, { useState, useEffect } from 'react'
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setLoading(true);
        setKeyword(searchKeyword);
       
    }
    useEffect(() =>{
        if(!keyword.length){
            return;
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result)=> {
            setLoading(false);
            setLocation(result);
        })
        .catch((err)=> {
            setLoading(false);
            setError(err);
        })
    },[keyword]) 
    return <LocationContext.Provider
        value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword
        }}
    >
        {children}
    </LocationContext.Provider>
}
