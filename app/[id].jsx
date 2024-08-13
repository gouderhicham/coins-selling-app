import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const IdPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>IdPage {id}</Text>
    </View>
  );
};

export default IdPage;
