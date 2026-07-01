import HomeScreen from "@/app-example/app/(tabs)";
import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { HouseIcon } from "phosphor-react-native/src/icons/House";
import { CardholderIcon, ChartLineIcon, GearSixIcon } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { styled } from "react-native-css";

const withTailwind = (Icon: any) => {
  return styled(Icon, {
    className: {
      target: "style",
      nativeStyleMapping: {
        color: "color"
      },
    },
  });
};

const StyledHouseIcon = withTailwind(HouseIcon);
const StyledCardholderIcon = withTailwind(CardholderIcon);
const StyledChartLineIcon = withTailwind(ChartLineIcon);
const StyledGearSixIcon = withTailwind(GearSixIcon);

const TabLayout = () => {
  const insets = useSafeAreaInsets();  
  const icons = new Map<string, any>([
    ['Home', StyledHouseIcon],
    ['Subscriptions', StyledCardholderIcon],
    ['Insights', StyledChartLineIcon],
    ['Settings', StyledGearSixIcon],
  ]);

  const TabIcon = ({ focused, icon }: { focused: boolean, icon: string }) => {
    const IconComponent = icons.get(icon);
    if (!IconComponent) return null;
    return (
      <View className="mt-7 p-3 rounded-2xl">
        <IconComponent
          weight="fill"
          size={focused ? "32" : "28"}
          className={focused ? "text-accent" : "text-white"}
        />
      </View>
    );
  }

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
    tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarBackground: () => (
      <View className="flex-1 bg-primary rounded-4xl text-white" />
    )
  }}>
    {tabs.map(t => (
      <Tabs.Screen name={t.name} options={{
        title: t.title,
        tabBarIcon: ({focused}) => (
          <TabIcon focused={focused} icon={t.title} />
        )
      }} />
    ))}
    <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} />
    
  </Tabs>
}

export default TabLayout;  