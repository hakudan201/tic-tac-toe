import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <LinearGradient
      colors={['#5D5FEF', '#843CE0']}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </LinearGradient>
  );
}
