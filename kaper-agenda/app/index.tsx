import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function Index() {
  const [name, setName] = useState(""); // Voor de gebruikersnaam
  const [password, setPassword] = useState(""); // Voor het wachtwoord

  const handleSubmit = () => {
    Alert.alert("Invoer", `Gebruiker: ${name}\nWachtwoord: ${password}`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text>Sign in </Text>
      

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        placeholder="Naam"
        value={name}
        onChangeText={setName}
      />

      {/* <Text>Wachtwoord</Text> */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        placeholder="Wachtwoord"
        secureTextEntry={true} // Verbergt de tekst voor wachtwoord
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}
