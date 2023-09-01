import { Stack } from "expo-router";
import { COLORS, FONT } from "../../constants/theme";
export default function TodoLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.lightWhite,
        headerTitleStyle: {
          fontFamily: FONT.regular,
          fontSize: 15,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "| My Todos",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "| About",
        }}
      />
    </Stack>
  );
}
