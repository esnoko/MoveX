import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-Jakarta text-3xl">Welcome to the MoveX!</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/index">Home</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
