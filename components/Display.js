import { StyleSheet, Text, View } from 'react-native'; // Importa componentes essenciais do React Native

// Componente Display, responsável por exibir o valor atual da operação e o resultado
export default props => {
    return (
        // A View contém os textos que exibem a operação e o resultado
        <View style={estilos.display}>
            {/* Exibe o valor da operação atual. O prop 'numberOfLines={1}' garante que o texto não quebre em mais de uma linha */}
            <Text style={estilos.textoDisplayOper} numberOfLines={1}>
                {props.valor} {/* O valor da operação (passado via props) */}
            </Text>

            {/* Exibe o resultado da operação. Também limitado a uma linha com 'numberOfLines={1}' */}
            <Text style={estilos.textoDisplayRes} numberOfLines={1}>
                {props.res} {/* O resultado da operação (passado via props) */}
            </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    // Estilo para a View que contém o display (toda a área onde a operação e o resultado são exibidos)
    display: {
        flex: 1, // Ocupa todo o espaço disponível (junto com outros componentes flex)
        padding: 20, // Define um espaçamento interno de 20 unidades
        justifyContent: 'center', // Centraliza os textos verticalmente
        alignItems: 'flex-end', // Alinha os textos à direita
        backgroundColor: '#444', // Cor de fundo do display (cinza escuro)
        width: '100%', // O display ocupa 100% da largura da tela
    },
    // Estilo para o texto que exibe o resultado da operação
    textoDisplayRes: {
        fontSize: 50, // Tamanho da fonte grande para o resultado
        color: '#FFF', // Cor do texto branco
    },
    // Estilo para o texto que exibe a operação atual
    textoDisplayOper: {
        fontSize: 25, // Tamanho da fonte menor para a operação em andamento
        color: '#FFF', // Cor do texto branco
    },
});
