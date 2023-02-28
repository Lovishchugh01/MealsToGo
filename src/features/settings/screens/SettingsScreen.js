import { AuthenticationContext } from '../../../services/authentication/authentication_context';
import { SafeAreaComponent } from './../../../components/utility/SafeAreaComponent';
import React, { useContext, useState, useCallback } from 'react';
import { Avatar, List } from "react-native-paper";
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/SpacerComponent';
import { Text } from './../../../components/typography/TextComponent';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[2]}
`
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext)
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
    getProfilePicture(user);
    }, [user])
    );
  return (
    <SafeAreaComponent>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#153f64" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#153f64"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="hint">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaComponent>
  );
}
