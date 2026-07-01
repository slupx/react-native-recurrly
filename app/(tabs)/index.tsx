import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'react-native-css'
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background">
      <Text className="font-sans-extrabold text-accent text-7xl">
        Home
      </Text>
      <Link href="/onboarding" className="bg-primary mt-8 px-4 py-3 rounded-2xl text-white">
        <Text className="font-sans-bold">Go to Onboarding</Text>
      </Link>

      {/* Auth */}
      <View className="flex-row gap-3 mt-3">
        <Link href="/(auth)/sign-in" className="bg-primary px-4 py-3 rounded-2xl text-white">
          <Text className="font-sans-bold">Sign In</Text>
        </Link>
        <Link href="/(auth)/sign-up" className="bg-primary px-4 py-3 rounded-2xl text-white">
          <Text className="font-sans-bold">Sign Up</Text>
        </Link>
      </View>

      {/* Suscriptions */}
      <View className="flex-row gap-3 mt-3">
        <Link href="/subscriptions/spotify" className="bg-primary px-4 py-3 rounded-2xl text-white">
          <Text className="font-sans-bold">Spotify</Text>
        </Link>
        <Link href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" }
        }} className="bg-primary px-4 py-3 rounded-2xl text-white">
          <Text>Claude</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}