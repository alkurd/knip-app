<<<<<<< Updated upstream
import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function Index() {
  const [name, setName] = useState(""); // Voor de gebruikersnaam
  const [password, setPassword] = useState(""); // Voor het wachtwoord

  const handleSubmit = () => {
    Alert.alert("Invoer", `Gebruiker: ${name}\nWachtwoord: ${password}`);
=======
import { Text, View, Button , TextInputBase} from "react-native";

export default function Index() {
  const handlePress = () => {
    alert("Je drukte op de knop!");
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      {/* <Text>Gebruiker</Text> */}
      {/* <Text id="user" style="height: 40px;">Gebruiker</Text> */} dit mag

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "30%",
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
          width: "30%",
          marginVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
        placeholder="Wachtwoord"
        secureTextEntry={true} // Verbergt de tekst voor wachtwoord
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Verstuur" onPress={handleSubmit} />
=======
      <Text style={{ marginBottom: 10 }}>
        Edit app/index.tsx to edit this screen.
      </Text>

      <Button title="Klik hier" onPress={handlePress} />
>>>>>>> Stashed changes
    </View>
  );
}
