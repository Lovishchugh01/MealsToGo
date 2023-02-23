import React, { useContext } from "react";
import { View,StatusBar, FlatList} from 'react-native';
import { ActivityIndicator} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RestaurantsInfoCard from "../components/RestaurantsInfoCard";
import {SafeAreaComponent} from '../../../components/utility/SafeAreaComponent'
import styled from 'styled-components/native';
import { Restaurants_context } from "../../../services/restaurants/restaurants_context";
import { colors } from './../../../infrastructure/theme/colors';
import { Search } from "../components/SearchComponent";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableOpacity } from "react-native-gesture-handler";



const RestaurantListContainer = styled(View)`
  flex:1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.aqua};
`
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{ 
    padding:12,
  }
})``;
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
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaComponent>
          <Search/>
          {isLoading && (
            <LoadingContainer>
            <Loading size="large" color={colors.navy} />
          </LoadingContainer>
          )}
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
        </SafeAreaComponent>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  );
};

export default RestaurantsScreen;
