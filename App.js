import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import logo from "./assets/pngegg(1).png";
import {useState} from "react";
import btnAdd from "./assets/pngegg(2).png";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo}/> 
        <Text>TODO List</Text>
        </View>
     <View>
      <TextInput placeholder="Entre com a tarefa" 
       value={tarefa}
       onChangeText={setTarefa}
      />
      <Image source={btnAdd}/>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 128, 
    width: 128,
  },
  btnAdd:{
    width: 32,
    height: 32,
  }
});
