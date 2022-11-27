import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Gradient} from "../../components/Gradient";

export const Favoritos = () => {
  return (
    <View style={styles.container}>
      <Gradient position = "top"/>
      <Text style={styles.title}>Favoritos</Text>
      <Text>Produto 2 Preço R$ 50,00 1 unidade em estoque</Text>
      <Text>Produto 5 Preço R$ 40,00 20 unidades em estoque</Text>
      <Text>Produto 6 Preço R$ 70,00 8 unidades em estoque</Text>
      <Text>+</Text>
      <Text>Produto 2 Preço R$ 50,00 1 unidade em estoque</Text>
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
  title: {
    color: "#120A8F",
    fontWeight: "bold",
    fontSize: 15,
  },
});
//background: #120A8F;