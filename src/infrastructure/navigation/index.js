import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationContext } from '../../services/authentication/authentication_context';
import { Navigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';


export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            {isAuthenticated ? <Navigator/> : <AccountNavigator/>}
        </NavigationContainer>
    )
    
}