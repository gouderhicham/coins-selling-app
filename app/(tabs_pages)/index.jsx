import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import { supabase } from "../../supabase/supabase-js";

export default function App() {
  const [first, setfirst] = useState([]);
  useMemo(() => {
    async function nameme() {
      let { data: countries, error } = await supabase
        .from("users")
        .select("*")
        .range(0, 10);

      setfirst((prev) => countries);
    }
    nameme();
  }, []);
  console.log(first);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {first.map((ele) => (
        <Text>{ele.username}</Text>
      ))}
    </View>
  );
}
