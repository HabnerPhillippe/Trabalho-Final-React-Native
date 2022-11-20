import React from "react";
import { Text,View } from "react-native";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

export const Cart = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: `1`,
      name: "title 1",
      price: 1,
    },
    {
      id: `2`,
      name: "title 2",
      price: 2,
    },
  ];

  return (
    <MainContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={{width:`100%`, height:50, padding:10, borderWidth:2}}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          );
        }}
        contentContainerStyle={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </MainContainer>
  );
};
