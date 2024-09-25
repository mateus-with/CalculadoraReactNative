import { StatusBar } from 'expo-status-bar'; // Importa o componente StatusBar para controlar a barra de status do dispositivo
import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar o estado dos componentes
import { SafeAreaView, StyleSheet, View } from 'react-native'; // Importa componentes essenciais do React Native
import Display from './components/Display'; // Importa o componente de Display para mostrar os resultados e operações
import Botao from './components/Botao'; // Importa o componente Botao para os botões da calculadora

export default function App() {
    // Estados para armazenar a operação digitada e o resultado
    const [operacao, setOperacao] = useState(""); // Estado para armazenar a operação atual
    const [resultado, setResultado] = useState(0); // Estado para armazenar o resultado da operação

    // Função que executa a operação atual usando a função eval (cuidado com a segurança)
    const operar = () => {
        try {
            setResultado(eval(operacao)); // Calcula o resultado da operação e armazena no estado resultado
        } catch (e) {
            setResultado("Erro"); // Se houver erro na operação (ex.: expressão inválida), exibe "Erro"
        }
    };

    // Função que adiciona um novo valor à operação ou executa comandos especiais como "AC" e "="
    const adicionarOperacao = (label) => {
        if (label === "=") {
            operar(); // Se o botão "=" for pressionado, executa a operação
        } else if (label === "AC") {
            // Se o botão "AC" for pressionado, limpa a operação e o resultado
            setOperacao("");
            setResultado(0);
        } else if (label === "BS") {
            // Se o botão "BS" for pressionado, remove o último caractere da operação
            setOperacao(operacao.slice(0, -1));
        } else {
            // Caso contrário, adiciona o label do botão à operação
            setOperacao(operacao + label);
        }
    };

    return (
        // SafeAreaView é usada para garantir que a interface respeite as áreas seguras em dispositivos como iPhones com notch
        <SafeAreaView style={styles.container}>
            {/* Componente Display que mostra a operação atual e o resultado */}
            <Display valor={operacao} res={resultado} />
            
            {/* View que contém os botões da calculadora */}
            <View style={styles.botoes}>
                {/* Map percorre um array com os labels dos botões e cria um Botao para cada um */}
                {["AC", "BS", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((label) => (
                    // Botao é o componente responsável por cada botão da calculadora
                    <Botao key={label} label={label} onClick={() => adicionarOperacao(label)} />
                ))}
            </View>
            
            {/* StatusBar controla o estilo da barra de status do dispositivo */}
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

// Estilos para o layout da interface
const styles = StyleSheet.create({
    container: {
        flex: 1, // Faz com que o SafeAreaView ocupe todo o espaço disponível
        justifyContent: 'flex-start', // Alinha os componentes ao início do eixo vertical
        alignItems: 'center', // Centraliza os componentes no eixo horizontal
        backgroundColor: '#fff', // Define a cor de fundo como branco
    },
    botoes: {
        flexDirection: "row", // Alinha os botões em uma linha
        flexWrap: "wrap", // Permite que os botões se ajustem e quebrem para a linha abaixo
    },
});
