import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import logo from "./assets/todo.png";
import { useState } from "react";
import btnAdd from "./assets/btnAdd.png";
import { FlashList } from "@shopify/flash-list";
import ImgExcluir from "./assets/trash-bin.png";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const handleAdd = () => {
    //Alert.alert(tarefa);
    setTarefas([tarefa, ...tarefas]);
    setTarefa("");
  };

  //ja importei o flatlist só utilizar
  const renderItem = ({ item }) => (
    <View style={styles.viewItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={()=> handleExcluir(item)} >
        <Image style={styles.lixeira} source={ImgExcluir} alt="Botão Excluir" />
      </TouchableOpacity>
    </View>
  );

  const handleExcluir = (item) => {
    setTarefas(tarefas.filter((oldItem) => oldItem !== item));
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text>TODO List</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Entre com a tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Image source={btnAdd} style={styles.btnAdd} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTarefas}>
        <FlashList data={tarefas} renderItem={renderItem} />
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
  btnAdd: {
    width: 32,
    height: 32,
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  viewTarefas: {
    width: "100%",
    flex: 1,
  },
  lixeira: {
    width: 25,
    height: 27,
  },
  viewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
