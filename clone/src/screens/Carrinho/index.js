import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Gradient} from "../../components/Gradient";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <Gradient position = "top"/>
      <Text style={styles.title}>Carrinho</Text>
      <Text>Produto Quantidade Preço Unitário Total Produto 1 2 R$ 25,00 R$ 50,00 Produto 4 1 R$ 100,00 R$ 100,00 Produto 5 1 R$ 40,00 R$ 40,00</Text>
      <Text>Total da compra R$ 190,00</Text>
      <Text>Data da compra 17/06/2022</Text>
      <Text>ADICIONAR MAIS ITENS</Text>
      <Text>FECHAR PEDIDO</Text>
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