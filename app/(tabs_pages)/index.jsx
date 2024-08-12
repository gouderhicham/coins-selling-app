import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import { supabase } from "../../supabase/supabase-js";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [user, setuser] = useState("2b9b0b7b-d633-4eed-8007-73433f963d90");
  useMemo(() => {
    async function nameme() {
      let { data: posts, error } = await supabase
        .from("posts")
        .select("*").eq("user_id" , user)
        .range(0, 10);
      setPosts((prev) => posts);
    }
    nameme();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {posts.map((ele) => (
        <>
          <Text>{ele.description}</Text>
        </>
      ))}
    </View>
  );
}