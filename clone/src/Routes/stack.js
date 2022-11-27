import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { AlterarCategoria } from "../screens/AlterarCategoria";
import { AlterarProduto } from "../screens/AlterarProduto";
import { Cadastro } from "../screens/Cadastro";
import { CadastroCategoria } from "../screens/CadastroCategoria";
import { CadastroProduto } from "../screens/CadastroProduto";
import { Carrinho } from "../screens/Carrinho";
import { ConfirmacaoAlteracaoSenha } from "../screens/ConfirmacaoAlteracaoSenha";
import { ConfirmacaoCadastro } from "../screens/ConfirmacaoCadastro";
import { ConfirmacaoCompra } from "../screens/ConfirmacaoCompra";
import { Favoritos } from "../screens/Favoritos";
import { Inicial } from "../screens/Inicial";
import { Produtos } from "../screens/Produtos";
import { RecuperacaoSenha } from "../screens/RecuperacaoSenha";
import { RecuperacaoSenhaCriar } from "../screens/RecuperacaoSenhaCriar";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CadastroProduto"
    >
      <Screen name="Login" component={Login} />
      <Screen name="AlterarCategoria" component={AlterarCategoria} />
      <Screen name="AlterarProduto" component={AlterarProduto} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="CadastroCategoria" component={CadastroCategoria} />
      <Screen name="CadastroProduto" component={CadastroProduto} />
      <Screen name="Carrinho" component={Carrinho} />
      <Screen
        name="ConfirmacaoAlteracaoSenha"
        component={ConfirmacaoAlteracaoSenha}
      />
      <Screen name="ConfirmacaoCadastro" component={ConfirmacaoCadastro} />
      <Screen name="ConfirmacaoCompra" component={ConfirmacaoCompra} />
      <Screen name="Favoritos" component={Favoritos} />
      <Screen name="Inicial" component={Inicial} />
      <Screen name="Produtos" component={Produtos} />
      <Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
      <Screen name="RecuperacaoSenhaCriar" component={RecuperacaoSenhaCriar} />
    </Navigator>
  );
}
