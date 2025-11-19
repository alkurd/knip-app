import { Stack } from "expo-router";

export default function RootLayout() {

  // return <Stack/>;
  return <Stack screenOptions={{headerShown:false}}/>;// om de header van de pagina's te verbergen

  // return <Stack>
  // <Stack.Screen name="index" options={{title: "Agenda"}}/> {/* naam veranderen van de header */}
  // <Stack.Screen name="about" options={{title: "About"}}/> {/* naam veranderen van de header */}
  // </Stack>
}

