import React, { useState, useMemo } from "react";
import { View, Text } from "react-native";
import { supabase } from "../../supabase/supabase-js";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Transactions page</Text>
    </View>
  );
}
