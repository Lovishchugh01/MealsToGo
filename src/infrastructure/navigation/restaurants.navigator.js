import React from "react";
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import RestaurantsScreen from './../../features/restaurants/screens/RestaurantsScreen';
import { Text } from "react-native";
import { RestaurantDetialScreen } from './../../features/restaurants/screens/RestaurantDetialScreen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator 
        screenOptions={{
            ...TransitionPresets.BottomSheetAndroid,
            headerShown:false
        }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetialScreen}
      />
    </RestaurantStack.Navigator>
  );
};