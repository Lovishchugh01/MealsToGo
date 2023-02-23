import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.navy};

`;

const error = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    color: ${theme.colors.text.quaternary};
    font-size: ${theme.fontSizes.h5};
`;

const label = (theme) => `
    color: ${theme.colors.text.quaternary};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};