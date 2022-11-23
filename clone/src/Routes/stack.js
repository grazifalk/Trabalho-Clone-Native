import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import RecuperacaoSenha from "../screens/RecuperacaoSenha"
import RecuperacaoSenhaCriar from "../screens/RecuperacaoSenhaCriar"
import ConfirmacaoAlteracaoSenha from "../screens/ConfirmacaoAlteracaoSenha"
import ConfirmacaoCadastro from "../screens/ConfirmacaoCadastro"
import ConfirmacaoCompra from "../screens/ConfirmacaoCompra"
import Cadastro from "../screens/Cadastro"

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
      <Screen name="RecuperacaoSenhaCriar" component={RecuperacaoSenhaCriar} />
      <Screen name="ConfirmacaoAlteracaoSenha" component={ConfirmacaoAlteracaoSenha} />
      <Screen name="ConfirmacaoCadastro" component={ConfirmacaoCadastro} />
      <Screen name="ConfirmacaoCompra" component={ConfirmacaoCompra} />
      <Screen name="Cadastro" component={Cadastro} />

    </Navigator>
  );
}