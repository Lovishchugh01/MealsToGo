import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "./../../../services/location/location.context";

const SearchContainer = styled(View)`
  position: absolute;
  z-index:999;
  top:20px;
  width:100%;
`;
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  
  useEffect(()=> {
    setSearchKeyword(keyword)
  },[keyword])
  return (
    <SearchContainer>
      <Searchbar 
        placeholder="Search for a location" 
        value={searchKeyword} 
        onSubmitEditing={() => {
        search(searchKeyword)
        }} 
        onChangeText={(text) => {
            setSearchKeyword(text)
        }}
      />
    </SearchContainer>
  );
};
