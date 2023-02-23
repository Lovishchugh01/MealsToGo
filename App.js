import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as UseOswald,
  Oswald_400Regular,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as UsePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as UseZeyada,
  Zeyada_400Regular,
} from "@expo-google-fonts/zeyada";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants_context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [OswaldLoaded] = UseOswald({
    Oswald_400Regular,
    Oswald_500Medium,
  });
  const [ZeyadaLoaded] = UseZeyada({
    Zeyada_400Regular,
  });
  const [PoppinsLoaded] = UsePoppins({
    Poppins_400Regular,
  });
  const [LatoLoaded] = UseLato({
    Lato_400Regular,
  });
  if (!OswaldLoaded || !ZeyadaLoaded|| !LatoLoaded || !PoppinsLoaded) {
    return null;
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation/>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}


