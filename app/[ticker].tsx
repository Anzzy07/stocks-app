import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";

export default function TickerScreen() {
  const { ticker } = useLocalSearchParams();
  return (
    <View>
      <Text>{ticker}</Text>
    </View>
  );
}
