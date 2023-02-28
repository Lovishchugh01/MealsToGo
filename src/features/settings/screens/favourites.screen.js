import React, { useContext } from 'react';
import { FavouritesContext } from './../../../services/favourites/favourites_context';
import { SafeAreaComponent } from './../../../components/utility/SafeAreaComponent';
import styled from 'styled-components';
import { RestaurantList } from '../../restaurants/components/RestaurantListStyle';
import { TouchableOpacity } from 'react-native';
import RestaurantsInfoCard from './../../restaurants/components/RestaurantsInfoCard';
import { Text } from 'react-native';
const NoFavouriteArea = styled(SafeAreaComponent)`
    align-items: center;
    justify-content: center;
`;
export const FavouritesScreen = ({navigation}) => {
    const { favourites } = useContext(FavouritesContext)

    return favourites.length ? (
        <SafeAreaComponent>
            <RestaurantList
            data={favourites}
            renderItem={({item}) => {
              return(
                <TouchableOpacity onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }>
                  <RestaurantsInfoCard restaurant={item} />
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item)=> item.name}
          />
        </SafeAreaComponent>
    ) : (
        <NoFavouriteArea>
            <Text> No Favourites Yet</Text>
        </NoFavouriteArea>
    )
};