import { Link } from 'expo-router';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Open HELLO GUYggggg</Text>
      <Link href={"users"}>go to users</Link>      
      <Link href={"posts"}>go to posts</Link>      
    </View>
  );
}