import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Gradient} from "../../components/Gradient";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Gradient position = "top"/>
      <Text style={styles.title}>Cadastro</Text>
      <Text>Nome</Text>
      <Text>CPF</Text>
      <Text>Data de Nascimento</Text>
      <Text>Senha</Text>
      <Text>Confirmar Senha</Text>
      <Text>CADASTRAR</Text>
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