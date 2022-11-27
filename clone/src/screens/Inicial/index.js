import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Gradient} from "../../components/Gradient";

export const Inicial = () => {
  return (
    <View style={styles.container}>
      <Gradient position = "top"/>
      <Text style={styles.title}>Marketplace</Text>
      <Text>Sobre nós...</Text>
      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      <Text>Categorias</Text>
      <Text>Tec3</Text>
      <Text>Tec1</Text>
      <Text>Tec2</Text>
      <Text>Criadores</Text>
      <Text>Alex</Text>
      <Text>Beatriz</Text>
      <Text>Carlos</Text>
      <Text>Alie</Text>
      <StatusBar style="auto" />
      <Gradient position = "bottom"/>
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
  title: {
    color: "#120A8F",
    fontWeight: "bold",
    fontSize: 15,
  },
});
//background: #120A8F;