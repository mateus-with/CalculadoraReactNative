import { StatusBar } from 'expo-status-bar'; // Importa o componente StatusBar para manipular a barra de status do dispositivo
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ColorPropType, Dimensions } from 'react-native'; 
// Importa vários componentes do React Native, incluindo TouchableHighlight para tornar um elemento clicável e Dimensions para obter o tamanho da tela

export default props => {
    // Array 'estilosBotoes' inicializa com o estilo base do botão
    const estilosBotoes = [estilos.btn];

    // Adiciona o estilo de botão duplo se a propriedade 'btnDuplo' for verdadeira
    if (props.btnDuplo) estilosBotoes.push(estilos.btnDuplo);

    // Adiciona o estilo de botão "=" se a propriedade 'btnIgual' for verdadeira
    if (props.btnIgual) estilosBotoes.push(estilos.btnIgual);

    // Adiciona o estilo de operação (para botões de operadores) se a propriedade 'operacao' for verdadeira
    if (props.operacao) estilosBotoes.push(estilos.btnOper);

    // Adiciona o estilo para o botão 'AC' se a propriedade 'ac' for verdadeira
    if (props.ac) estilosBotoes.push(estilos.btnAC);

    // Adiciona o estilo para o botão 'BS' (backspace) se a propriedade 'bs' for verdadeira
    if (props.bs) estilosBotoes.push(estilos.btnBS);

    return (
        // TouchableHighlight torna o botão clicável e chama a função 'onClick' passada via props
        <TouchableHighlight onPress={props.onClick} style={estilosBotoes}>
            {/* Exibe o texto do botão, recebido através de 'props.label', com cor branca */}
            <Text style={{ color: '#fff' }}>{props.label}</Text>
        </TouchableHighlight>
    );
};

const estilos = StyleSheet.create({
    // Estilo base para todos os botões
    btn: {
        fontSize: 30, // Tamanho da fonte do texto no botão
        height: Dimensions.get('window').width / 4, // Altura do botão, calculada como 1/4 da largura da tela
        width: Dimensions.get('window').width / 4, // Largura do botão, calculada como 1/4 da largura da tela
        padding: 20, // Espaçamento interno do botão
        backgroundColor: "#000", // Cor de fundo preta
        color: "#fff", // Cor do texto branca
        borderWidth: 1, // Largura da borda de 1 pixel
        borderColor: "#777", // Cor da borda cinza
        textAlign: "center", // Alinha o texto ao centro do botão
    },
    // Estilo especial para o botão de "="
    btnIgual: {
        color: "#f00", // Cor do texto vermelha
    },
    // Estilo para os botões de operação (+, -, *, /)
    btnOper: {
        color: "#0f0", // Cor do texto verde
    },
    // Estilo para o botão 'AC' (clear)
    btnAC: {
        color: "#ff0", // Cor do texto amarela
    },
    // Estilo para o botão 'BS' (backspace)
    btnBS: {
        color: '#0ff', // Cor do texto ciano (azul claro)
    },
    // Estilo especial para botões que ocupam o dobro de largura (ex.: botão "0")
    btnDuplo: {
        width: (Dimensions.get('window').width / 4) * 2, // Largura duplicada (ocupando 2/4 da tela)
    }
});
