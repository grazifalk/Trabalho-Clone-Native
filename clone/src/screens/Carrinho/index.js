import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Gradient } from "../../components/Gradient";
import { CardContainer, Container, ContainerButton, StButton, TextButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Carrinho = () => {
  const navigation = useNavigation();

  const screenProdutos = () => {
    navigation.navigate("Produtos");
  };
  const screenConfirmacaoCompra = () => {
    navigation.navigate("ConfirmacaoCompra");
  };

  return (
    <Container>
      <Gradient />
      <Header title="Carrinho" />
      <CardContainer>
        <Text>
          Produto Quantidade Preço Unitário Total Produto 1 2 R$ 25,00 R$ 50,00
          Produto 4 1 R$ 100,00 R$ 100,00 Produto 5 1 R$ 40,00 R$ 40,00
        </Text>
        <Text>Total da compra R$ 190,00</Text>
        <Text>Data da compra 17/06/2022</Text>
        <ContainerButton>
        <StButton onPress={screenProdutos}>
          <TextButton>ADICIONAR MAIS ITENS</TextButton>
        </StButton>
        <StButton onPress={screenConfirmacaoCompra}>
          <TextButton>FECHAR PEDIDO</TextButton>
        </StButton>
        </ContainerButton>
      </CardContainer>
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
};
