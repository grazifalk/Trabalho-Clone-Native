import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Gradient} from "../../components/Gradient";

export default function ConfirmacaoCadastro() {
  return (
    <View style={styles.container}>
      <Gradient position = "top"/>
      <Text style={styles.title}>Usupario cadastrado com sucesso!</Text>
      <Text>LOGIN</Text>
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