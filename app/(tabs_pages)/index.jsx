import { View, Text, Pressable, Image } from "react-native";
import { Link, router } from "expo-router";
import Post from "../../components/Post";
import { useRef } from "react";
import { Animated, ScrollView } from "react-native";
const index = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.ScrollView
      scrollEventThrottle={10}
      showsVerticalScrollIndicator = {false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
      >
        <Text>index page</Text>
        <Link href={"users/1"}>Go to user 1</Link>
        <Pressable
          onPress={() => {
            router.push("users/2");
          }}
        >
          <Text>go to users 2</Text>
        </Pressable>
        <Post profileLink={1} sellBuy={"Sell"} />
        <Post profileLink={2} sellBuy={"Buy"}/>
      </Animated.ScrollView>
    </View>
  );
};

export default index;
