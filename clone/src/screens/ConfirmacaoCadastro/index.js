import {StatusBar} from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {Gradient} from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { Container, Logo, Title, StButton, TextButton } from "./styles";
export const ConfirmacaoCadastro = () => {
  const navigation = useNavigation();

  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo} />
      <Title >Usuário cadastrado com sucesso!</Title>
      <StButton onPress={screenLogin}>
      <TextButton>LOGIN</TextButton>
      </StButton>
      <StatusBar style="auto" />
    </Container>
  );
}