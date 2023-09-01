import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants/theme";
export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.lightWhite,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          tabBarLabel: "Todo",
          title: "Todo",
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
