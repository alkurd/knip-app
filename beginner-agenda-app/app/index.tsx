// import { useState } from "react";
// import { Alert, Button, Text, TextInput, View } from "react-native";

// export default function Index() {
//   const [name, setName] = useState(""); // Voor de gebruikersnaam
//   const [password, setPassword] = useState(""); // Voor het wachtwoord
  

//   // functions
//   const handleSubmit = () => {
//     Alert.alert("Invoer", `Gebruiker: ${name}\nWachtwoord: ${password}`);
//   };


//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 20,
//       }}
//     >
//       <Text>Sign in </Text>
      

//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "gray",
//           borderWidth: 1,
//           width: "80%",
//           marginVertical: 10,
//           paddingHorizontal: 10,
//           borderRadius: 5,
//         }}
//         placeholder="Naam"
//         value={name}
//         onChangeText={setName}
//       />
      
     
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "gray",
//           borderWidth: 1,
//           width: "80%",
//           marginVertical: 10,
//           paddingHorizontal: 10,
//           borderRadius: 5,
//         }}
//         placeholder="Wachtwoord"
//         secureTextEntry={true} // Verbergt de tekst voor wachtwoord
//         value={password}
//         onChangeText={setPassword}
//       />

//       <Button title="Login" onPress={handleSubmit} />
//     </View>
//   );
// }
import { Text, View } from "react-native";

export default function Index() {
  
  return (

  <View style={styles.container}>
      <Text style= {StyleSheet.content}>Sign in </Text>
    <Text>naam</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  justifycontent: "center",
  alignitems: "center",
  padding: 20,
  backgroundcolor: 'red',
},
content: {
  fontSize: 20,
  color: 'white',
}

});

  
    
