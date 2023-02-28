import React, { useState, useEffect } from "react";
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
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication_context";

// import * as firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyBalpkjTI_NnC3gfNrt2_P_zw6Z6XH8KlE",
//   authDomain: "mealstogo-64712.firebaseapp.com",
//   projectId: "mealstogo-64712",
//   storageBucket: "mealstogo-64712.appspot.com",
//   messagingSenderId: "271007920837",
//   appId: "1:271007920837:web:3981383a4ea9f4e5fcb6ac",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBalpkjTI_NnC3gfNrt2_P_zw6Z6XH8KlE",
  authDomain: "mealstogo-64712.firebaseapp.com",
  projectId: "mealstogo-64712",
  storageBucket: "mealstogo-64712.appspot.com",
  messagingSenderId: "271007920837",
  appId: "1:271007920837:web:3981383a4ea9f4e5fcb6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

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
  if (!OswaldLoaded || !ZeyadaLoaded || !LatoLoaded || !PoppinsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          
                <Navigation />
              
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
