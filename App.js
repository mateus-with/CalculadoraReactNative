import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Display from './components/Display';
import Botao from './components/Botao';

export default function App() {
    const [operacao, setOperacao] = useState("");
    const [resultado, setResultado] = useState(0);

    const operar = () => {
        try {
            setResultado(eval(operacao));
        } catch (e) {
            setResultado("Erro"); 
        }
    };

    const adicionarOperacao = (label) => {
        if (label === "=") {
            operar();
        } else if (label === "AC") {
            setOperacao("")
            setResultado(0);
        } else if (label === "BS") {
            setOperacao(operacao.slice(0, -1));
        } else {
            setOperacao(operacao + label);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Display valor={operacao} res={resultado} />
            <View style={styles.botoes}>
                {["AC", "BS", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((label) => (
                    <Botao key={label} label={label} onClick={() => adicionarOperacao(label)} />
                ))}
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    botoes: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
