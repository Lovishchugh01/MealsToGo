import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect, useContext } from 'react'
import styled from 'styled-components/native';
import { Camera, CameraType } from 'expo-camera';
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from '../../../services/authentication/authentication_context';

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`
const CameraContainer = styled.View`
   width: 100%;
   height: 100%;
`;
const CameraButton = styled(Button).attrs({
    mode: "contained",
    icon: "camera"
 })`
    position: absolute;
    top: 85%;
    left: 140px;
 `;

export const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext);
    const snap = async () => {
        if (cameraRef) {
          const photo = await cameraRef.current.takePictureAsync();
          console.log(photo);
          AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
          navigation.goBack();
        }
      };
    
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <CameraContainer>
         <ProfileCamera
            ref={camera => (cameraRef.current = camera)}
            ratio={"16:9"}
            type={CameraType.front}
            onCameraReady={() => {
               console.log("Camera Ready");
            }}
         ></ProfileCamera>

         <CameraButton onPress={snap}>Snap!</CameraButton>
      </CameraContainer>
    )
}