import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const index = ({profileImage , userName, buySell, daPrice , eurPrice, maxAmount, profileLink}) => {
  return (
    <View>
      <Text>index page</Text>
      <Link href={"users/1"}>Go to user 1</Link>
      <Pressable
        onPress={() => {
          router.push("users/2");
        }}
      >
        <Text>go to users 2</Text>
      </Pressable>
      <Image />
      <div className="container">
        <div className="upper-container">
          <div className="left">
            <div className="left-profile-image">
              <div className="image">
                <img src="./someSource" />
              </div>
              <div className="right-profile-image">
                <div className="username">
                  <h3>nigg user</h3>
                  <img src="/verfied" />
                </div>
                <div className="date">10/06/2024 2:43 PM</div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <Text> - nigg user wants to buy eur for price of : </Text>
        <Text> - 1 Eur = 230 DA</Text>
        <Text> - Max Amount: 56000 DA </Text>
      </div>
    </View>
  );
};

export default index;
