import styled from 'styled-components/native';
import { Button, TextInput } from "react-native-paper";
import { colors } from './../../../infrastructure/theme/colors';
import { Text } from '../../../components/typography/TextComponent';

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/1.jpg")    
})`
    flex:1;
    align-items: center;
    justify-content: center;
`
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.text.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.navy};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
export const Title = styled(Text)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.brand.navy};
  font-family: ${(props) => props.theme.fonts.body};
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const AnimationWrapper = styled.View`
  width: 100%;
  height: 20%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[4]};
  color: '#153f64';
`;