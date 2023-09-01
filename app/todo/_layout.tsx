import { Stack } from "expo-router";
import { COLORS } from "../../constants/theme";
import { Text } from "react-native";
export default function TodoLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.lightWhite,
        headerTitleStyle: {
          fontWeight: "400",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "My Todos",
        }}
      />
    </Stack>
  );
}
