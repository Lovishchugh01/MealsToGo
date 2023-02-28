import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from './../../features/map/screens/MapScreen';
import { FavouritesContextProvider } from "../../services/favourites/favourites_context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants_context";
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const Navigator = () => {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "#153f64",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurant" component={RestaurantsNavigator} options={{ headerShown: false }} />
              <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
              <Tab.Screen name="Settings" component={SettingsNavigator} options={{ headerShown: false }} />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
};

