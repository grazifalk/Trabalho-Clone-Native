import { StatusBar } from "expo-status-bar";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Logo,
  Title,
  InputNome,
  InputCPF,
  InputDate,
  InputPassword,
  StButton,
  TextButton
} from "./styles";
export const Cadastro = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function screenConfirmacaoCadastro() {
    navigation.navigate("ConfirmacaoCadastro");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo} />
      <Title>Cadastro</Title>
      <InputNome
        value={user.nome}
        onChangeText={setUser}
        placeholder={"Nome"}
        placeholderTextColor={"gray"}
      />
      <InputCPF
        value={user.cpf}
        onChangeText={setUser}
        placeholder={"CPF"}
        placeholderTextColor={"gray"}
      />
      <InputDate
        value={user.date}
        onChangeText={setUser}
        placeholder={"Data de Nascimento"}
        placeholderTextColor={"gray"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Senha"}
        placeholderTextColor={"gray"}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={"Confirmar Senha"}
        placeholderTextColor={"gray"}
      />
      <StButton onPress={screenConfirmacaoCadastro}>
        <TextButton>CADASTRAR</TextButton>
      </StButton>
      <StatusBar style="auto" />
    </Container>
  );
}
