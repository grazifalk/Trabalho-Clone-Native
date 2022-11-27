import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { Header } from "../../components/Header";
import {
  Container,
  Logo,
  TextButton,
  StButton,
  Title,
} from "./styles";
import { InputSenha } from "../../components/InputSenha";

export const RecuperacaoSenhaCriar = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function screenConfirmacaoAlteracaoSenha() {
    navigation.navigate("ConfirmacaoAlteracaoSenha");
  }

  return (
    <Container>
      <Gradient />
      <Header />
      <Logo source={logo} />
      <Title>Criar Senha</Title>
      <InputSenha
        value={user.password}
        onChangeText={setUser}
        placeholder={"Digite sua nova senha"}
        placeholderTextColor={"gray"}
      />
      <br/>
      <InputSenha
        value={user.password}
        onChangeText={setUser}
        placeholder={"Repita sua nova senha"}
        placeholderTextColor={"gray"}
      />
      <StButton onPress={screenConfirmacaoAlteracaoSenha}>
        <TextButton>ALTERAR</TextButton>
      </StButton>
      <StatusBar style="auto" />
    </Container>
  );
};
