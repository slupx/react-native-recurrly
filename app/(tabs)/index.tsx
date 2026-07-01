import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="font-bold text-accent text-6xl">
        Welcome!
      </Text>
      <Link href="/onboarding" className="bg-primary mt-8 p-4 rounded-xl text-white">
        <Text>Go to Onboarding</Text>
      </Link>

      {/* Auth */}
      <View className="flex-row gap-4 mt-4">
        <Link href="/(auth)/sign-in" className="bg-primary p-4 rounded-xl text-white">
          <Text>Sign In</Text>
        </Link>
        <Link href="/(auth)/sign-up" className="bg-primary p-4 rounded-xl text-white">
          <Text>Sign Up</Text>
        </Link>
      </View>

      {/* Suscriptions */}
      <View className="flex-row gap-4 mt-4">
        <Link href="/subscriptions/spotify" className="bg-primary p-4 rounded-xl text-white">
          <Text>Spotify</Text>
        </Link>
        <Link href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" }
        }} className="bg-primary p-4 rounded-xl text-white">
          <Text>Claude</Text>
        </Link>
      </View>
    </View>
  );
}