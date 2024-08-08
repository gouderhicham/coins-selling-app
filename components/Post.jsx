import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";

const Profile = ({
  // profileImage,
  // userName,
  // buySell,
  // daPrice,
  // eurPrice,
  // maxAmount,
  sellBuy,
  profileLink,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Pressable
          onPress={() => {
            router.push(`/users/${profileLink}`);
          }}
          // left
          style={styles.left}
        >
          <Image
            source={require("../assets/images/user.png")}
            style={styles.profileImage}
          />
          <View style={styles.rightProfileImage}>
            <View style={styles.username}>
              {/* // title */}
              <Text style={styles.usernameText}>nigg user</Text>
              <Image
                source={require("../assets/images/verified.webp")}
                style={styles.verifiedImage}
              />
            </View>
            <Text style={styles.date}>10/06/2024 2:43 PM -</Text>
          </View>
        </Pressable>
        <View style={styles.right}></View>
      </View>
      <View style>
        <Text style={{ fontSize: 16 }}>
          {" "}
          - nigger user wants to buy eur for price of :
        </Text>
        <Text style={{ fontSize: 16 }}> - 1 Eur = 230 DA</Text>
        <Text style={{ fontSize: 16 }}> - Max Amount: 56000 DA </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#f77f7f",
            width: "50%",
            alignItems: "center",
            padding: 10,
            borderRightColor: "black",
            borderRightWidth: 1,
          }}
        >
          <Text>{sellBuy}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#acfda8",
            width: "50%",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    borderColor: "#C7C7C7",
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    margin: 13,
    borderRadius: 15,
    overflow: "hidden",
  },
  upperContainer: {
    flexDirection: "row",
    marginBottom: 10,
    paddingLeft: 14,
  },
  left: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  right: {
    flex: 1,
  },
  rightProfileImage: {
    marginLeft: 9,
  },
  verifiedImage: {
    width: 20,
    height: 20,
  },

  username: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: 45,
    width: 45,
  },
  usernameText: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 3,
  },
  verifiedImage: {
    width: 20,
    height: 20,
  },
  date: {
    color: "gray",
  },
});
export default Profile;
