import HomeScreen from "@/app-example/app/(tabs)";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Cardholder, ChartLine, GearSix, House } from "@/components/icons"

const tabs = [
  { name: 'index', title: 'Home', icon: House },
  { name: 'subscriptions', title: 'Subscriptions', icon: Cardholder },
  { name: 'insights', title: 'Insights', icon: ChartLine },
  { name: 'settings', title: 'Settings', icon: GearSix }
]


const TabLayout = () => {
  const insets = useSafeAreaInsets();  

  return <Tabs screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: insets.bottom,
      marginHorizontal: 20,
      borderTopWidth: 0,
      elevation: 0,
      height: 64,
    },
    tabBarBackground: () => (
      <View className="flex-1 bg-primary rounded-4xl text-white" />
    )
  }}>
    {tabs.map(t => (
      <Tabs.Screen key={t.name} name={t.name} options={{
        title: t.title,
        tabBarIcon: ({focused}) => (
          <TabIcon focused={focused} Icon={t.icon} />
        )
      }} />
    ))}
    <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} />
    
  </Tabs>
}


const TabIcon = ({ focused, Icon }: { focused: boolean, Icon: React.ElementType }) => {  
  return (
    <View className="mt-7 p-3 rounded-2xl">
      <Icon
        weight="fill"
        size={focused ? "32" : "28"}
        className={focused ? "text-accent" : "text-white"}
      />
    </View>
  );
}



export default TabLayout;  