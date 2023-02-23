import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { FontAwesome } from '@expo/vector-icons';
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { Text } from './../../../components/typography/TextComponent';
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
  placeId,
} from "./RestaurantInfoStyle";

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Chai Sutta Bar",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    ],
    address = "Mohali",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover
          key={name}
          source={{ uri: photos[0] }}
        />
        <Card.Content>
          <Info>
            <Text variant="label">{name}</Text>
            <Section>
              <Rating>{ratingArray.map((_,i) => <SvgXml key={`Star-${placeId}-${i}`} xml={star} height={20} width={20} />)}</Rating>
              <SectionEnd>
                {isClosedTemporarily && (
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                )}
                <Spacer position="left" size="large"/>
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                <Spacer position="left" size="large"/>
                <Icon style={{backgroundColor:'white',width:20,height:20}} source={{ uri: icon }} />
              </SectionEnd>
            </Section>
            <Text variant="caption">{address}</Text>
          </Info>
        </Card.Content>
      </RestaurantCard>
    </>
  );
};

export default RestaurantsInfoCard;
