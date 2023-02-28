import React, { useContext, useState } from "react";
import { View, StatusBar } from 'react-native';
import { ActivityIndicator} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RestaurantsInfoCard from "../components/RestaurantsInfoCard";
import {SafeAreaComponent} from '../../../components/utility/SafeAreaComponent'
import styled from 'styled-components/native';
import { Restaurants_context } from "../../../services/restaurants/restaurants_context";
import { colors } from './../../../infrastructure/theme/colors';
import { Search } from "../components/SearchComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavouritesBar } from "../../../components/favourites/FavouritesBar";
import { FavouritesContext } from './../../../services/favourites/favourites_context';
import { RestaurantList } from "../components/RestaurantListStyle";
import { FadeInView } from "../components/animations/FadeAnimation";

const RestaurantListContainer = styled(View)`
  flex:1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.aqua};
`

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const RestaurantsScreen = ({navigation}) => {
  const { isLoading, restaurant } = useContext(Restaurants_context);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false)
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaComponent>
          <Search 
            isFavouritesToggled = {isToggled}
            onFavouritesToggle={() => setIsToggled(!isToggled)}
          />
          {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>}
          {isLoading && (
            <LoadingContainer>
            <Loading size="large" color={colors.navy} />
          </LoadingContainer>
          )}
        <FadeInView>
          <RestaurantList
            data={restaurant}
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
          </FadeInView>
        </SafeAreaComponent>
        
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  );
};

export default RestaurantsScreen;
