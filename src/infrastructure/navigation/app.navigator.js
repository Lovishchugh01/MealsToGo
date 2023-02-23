import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaComponent } from "../../components/utility/SafeAreaComponent";
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from './../../features/map/screens/MapScreen';


function Settings() {
  return (
    <SafeAreaComponent>
      <Text>Settings!</Text>
    </SafeAreaComponent>
  );
}

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
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "#153f64",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurant" component={RestaurantsNavigator} options={{headerShown:false}}/>
          <Tab.Screen name="Map" component={MapScreen} options={{headerShown:false}}/>
          <Tab.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

