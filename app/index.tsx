import Calc from '@/components/calc';
import React from 'react';
import { Text, View } from "react-native";
import { Stack } from 'expo-router'

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title: "Arithmetic Calculator"}}></Stack.Screen>
    <Calc></Calc>
    </>
  );
};
