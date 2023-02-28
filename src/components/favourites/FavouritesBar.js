import React from "react";
import { View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/SpacerComponent";
import { Text } from "../typography/TextComponent";
import { CompactRestaurantInfo } from "./../restaurant/CompactRestaurantInfo";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if(!favourites.length){return null}
  return (
    <FavouritesWrapper>
      <Text variant="hint">Favourite</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity onPress={() => 
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }>
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
