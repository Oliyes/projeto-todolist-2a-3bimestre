import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import logo from "./assets/pngegg (1).png";
import {useState} from "react";
import btnAdd from "./assets/btnAdd.png";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([])

  const handleAdd = () => {

    //Alert.alert(tarefa);
    setTarefas([tarefa, ...tarefas]);
    setTarefa("");

  }

//ja importei o flatlist só utilizar

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo}/> 
        <Text>TODO List</Text>
        </View>
     <View style={styles.viewInput}>
      <TextInput placeholder="Entre com a tarefa" 
       value={tarefa}
       onChangeText={setTarefa}
      />
      <TouchableOpacity onPress={handleAdd}>
        <Image source={btnAdd} style={styles.btnAdd}/>  
      </TouchableOpacity>
   
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
    padding: 10,
  },
  logo: {
    height: 128, 
    width: 128,
  },
  btnAdd:{
    width: 32,
    height: 32,
  },
  viewInput:{
   flexDirection: "row",
   justifyContent: "space-between",
   width: "100%",
  }
});



