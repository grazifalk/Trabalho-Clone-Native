import {StatusBar} from "expo-status-bar";
import { useState } from "react";
import {Text, View} from "react-native";
import {Gradient} from "../../components/Gradient";

export default function RecuperacaoSenha() {
  const [user, setUser] = useState({
    login: "",
    password: "",
  })

  return (
    <View>
      <Gradient />
      <Text>Recuperar Senha</Text>
      <Text>Digite seu CPF</Text>
      <Text>RECUPERAR</Text>
      <StatusBar style="auto" />
    </View>
  );
}