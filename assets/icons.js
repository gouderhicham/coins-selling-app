import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
  index: (props) => <AntDesign name="home" size={26} {...props} />,
  create: (props) => <AntDesign name="pluscircleo" size={26} {...props} />,
  notifications: (props) => <Feather name="bell" size={26} {...props} />,
  profile: (props) => <AntDesign name="user" size={26} {...props} />,
};
