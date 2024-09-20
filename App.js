import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

export default function App() {

  const [valor1, setValor1] = useState(10);
  const [valor2, setValor2] = useState(10);
  const [resultado, setResultado] = useState(20);

  const soma = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    setResultado(num1 + num2);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Calculadora</Text>

      <TextInput
        style={styles.display}
        value={String(valor1)}
        onChangeText={(text) => setValor1(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.display}
        value={String(valor2)}
        onChangeText={(text) => setValor2(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.display}
        value={String(resultado)}
        editable={false}
      />

      <TouchableHighlight onPress={soma}>
        <View>
          <Text style={styles.btn}>Somar</Text>
        </View>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  display: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: '#aaa',
    padding: 20,
    textAlign: 'center',
  },
});
