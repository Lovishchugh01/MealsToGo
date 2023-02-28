import { View, Text } from 'react-native'
import React from 'react'
import styled  from 'styled-components/native';
import { CompactRestaurantInfo } from '../../../components/restaurant/CompactRestaurantInfo';

const MyText = styled.Text`

`
export const MapCallout = ({ restaurant }) => {
  return (
    <>
    <CompactRestaurantInfo isMap restaurant={restaurant}/>
    
    </>
  )
}