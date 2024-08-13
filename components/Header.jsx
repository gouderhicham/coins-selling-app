import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  InteractionManager,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      {/* Whole bar  */}
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <View style={styles.container}>
        {/* left side */}
        <View style={styles.left_container}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              color: "#0052FF",
              marginRight: 4,
            }}
          >
            Dz
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Coins
          </Text>
        </View>
        {/* right side */}
        <TouchableOpacity
          onPress={() => {
            router.push("profile");
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/user.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    borderTopColor: "#e6e6e6",
    borderTopWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  left_container: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  image: {
    height: 35,
    width: 35,
    marginRight: 15,
  },
});
