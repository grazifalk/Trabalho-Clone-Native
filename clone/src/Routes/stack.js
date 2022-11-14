import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import RecuperacaoSenha from "../screens/RecuperacaoSenha"

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
    </Navigator>
  );
}