import { View,Image, StyleSheet } from "react-native";

const TabImage = ({ name }) => {
  let source;

  switch (name) {
    case "home":
      source = require("../assets/tab_icons/home.png");
      break;
    case "transactions":
      source = require("../assets/tab_icons/transactions.png");
      break;
    case "plus":
      source = require("../assets/tab_icons/plus.png");
      break;
    case "notifications":
      source = require("../assets/tab_icons/notifications.png");
      break;
    default:
      source = require("../assets/tab_icons/loading.png");
  }

  return (
    <>
      {source && (
        <View style={styles.container}>
          <Image style={styles.image} source={source} />
          {/* <View style={styles.badge} /> */}
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: 22,
    width: 22,
  },
  badge: {
    position: "absolute",
    top: -3, 
    right: -0, 
    height: 10,
    width: 10,
    borderRadius: 4,
    backgroundColor: "red",
    borderColor : "black" , 
    borderWidth : 0.4 , 
  },
});
export default TabImage;
