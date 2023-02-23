import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/SearchComponent";
import { LocationContext } from "./../../../services/location/location.context";
import { Restaurants_context } from "./../../../services/restaurants/restaurants_context";
import { MapCallout } from "../components/MapCallout";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
export const MapScreen = ({navigation}) => {
  const { location } = useContext(LocationContext);
  const { restaurant } = useContext(Restaurants_context);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng,  viewport } = location;

  useEffect(()=> {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat)
  },[location, viewport])
  return (
    <>
      <Search />
      <Map 
        region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
      >
        {restaurant.map((restaurant,i)=> {
            return (
                <>
                    <Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                    >
                        <Callout onPress={()=>{
                            navigation.navigate("RestaurantDetail",{
                                restaurant,
                            })
                        }}>
                    <MapCallout restaurant={restaurant}/>

                        </Callout>

                    </Marker>
                </>
            );
        })}
      </Map>
    </>
  );
};
