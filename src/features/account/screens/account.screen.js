import React from 'react'
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper, } from './../components/account.styles';
import { Spacer } from '../../../components/spacer/SpacerComponent';
import LottieView from "lottie-react-native";

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
        <AccountCover/>
        <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/foodies.json")}
        />
      </AnimationWrapper>
        <Title>Meals To Go</Title>
        <AccountContainer>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  )
}