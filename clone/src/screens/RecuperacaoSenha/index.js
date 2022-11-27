import {StatusBar} from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {Gradient} from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import {
  Container,
  Logo,
  TextButton,
  StButton,
  Title,
  InputCPF,
} from "./styles";
import {Header} from "../../components/Header"

export const RecuperacaoSenha = () => {
  const [user, setUser] = useState({
    cpf: "",
  })

  const navigation = useNavigation();

  function screenRecuperacaoSenhaCriar() {
    navigation.navigate("RecuperacaoSenhaCriar");
  }

  return (
    <Container>
      <Gradient />
      <Header />
      <Logo source={logo} />
      <Title>Recuperar Senha</Title>
      <InputCPF
        value={user.cpf}
        onChangeText={setUser}
        placeholder={"Digite seu CPF"}
        placeholderTextColor={"gray"}
      />
      <StButton onPress={screenRecuperacaoSenhaCriar}>
      <TextButton>RECUPERAR</TextButton>
      </StButton>
      <StatusBar style="auto" />
      </Container>
  );
}