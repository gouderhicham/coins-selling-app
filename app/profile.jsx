import { View, Text } from "react-native";
import Post from "../components/Post";
const profile = () => {
  return (
    <View style={{backgroundColor : "#ACACAC" , flex : 1}}>
      <Text>profile</Text>
      <Post sellBuy={"buy"} />
      <Post sellBuy={"sell"} />
    </View>
  );
};

export default profile;
// TODO: edit the post design 