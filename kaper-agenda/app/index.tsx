import { Link } from "expo-router";
import React, { useState } from "react";
import { Alert, Linking, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [username, setUsername] = useState(""); // Voor de gebruikersnaam
  const [password, setPassword] = useState(""); // Voor het wachtwoord

  // functions

  const handleSubmit = () => {
    // Alert.alert("Invoer", `Gebruiker: ${username}\nWachtwoord: ${password}`);
    
    Alert.alert("Je Wordt ingelogd",`Welkom, ${username}`);
    
  };
  
  const Login = () =>{
    const url_login = "about";
    Linking.openURL(url_login);
  };
  
  const openLink = () => {
  const url = "https://www.youtube.com/watch?v=G1XiiXTQHSE"; // put your link here
  Linking.openURL(url);
  };
  
  
  
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Sign in</Text> */}

      <TextInput
        style={styles.input}
        placeholder="Naam"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Wachtwoord"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      
      {/* <Button title="Login" onPress={Login} /> werkt niet voor telfoon */}
      {/* <Text style={styles.button} onPress={Login}>Log in</Text> */}

      <Link href="/about" style={styles.button}>Log in</Link>
      <Text style={styles.link} onPress={openLink}>Link Tutorial</Text>
    
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom:400,
  },
  title: {
    marginBottom:10,
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingVertical: 25,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  link: {
    color: "black",
    marginTop: 10,
    fontSize: 14,
  },
  
  button: {
    color: "white",
    marginTop: 5,
    padding: 10,
    width: "100%",
    height: 40,
    textAlign: "center",
    backgroundColor: "darkblue",
    fontSize: 15,

  },
  
});

