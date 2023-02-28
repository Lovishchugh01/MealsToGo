import { AuthenticationContext } from '../../../services/authentication/authentication_context';
import { SafeAreaComponent } from './../../../components/utility/SafeAreaComponent';
import React, { useContext } from 'react';
import { Avatar, List } from "react-native-paper";
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/SpacerComponent';
import { Text } from './../../../components/typography/TextComponent';

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[2]}
`
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) =>  {
    const { onLogout, user } = useContext(AuthenticationContext)
    
    return (
      <SafeAreaComponent>
        <AvatarContainer>
            <Avatar.Icon size={150} icon="human" backgroundColor="#153f64"/>
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
  