import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="select-game" options={{ title: 'Select Game' }} />
    <Stack.Screen name="game-page" options={{ title: 'Game Page' }} />
  </Stack>;
}
