import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Products from "../screens/Products";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name="home" />
      <Stack.Screen component={Products} name="products" />
      <Stack.Screen component={ProductDetail} name="productDetail" />
    </Stack.Navigator>
  );
};

export default RootNavigation;