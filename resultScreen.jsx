import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Botao  from '../../components/botao';

export default function Result() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'green', fontSize: 30, fontWeight: '800', textAlign: 'center'}}> SEU <Text style={{ color: 'orange' }}>IMC</Text></Text>

            <View style={styles.valueContainer}>
                <Text style={styles.value}>22.5</Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Peso</Text>
                    <Text style={styles.data}>65 kg</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Altura</Text>
                    <Text style={styles.data}>170 cm</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Idade</Text>
                    <Text style={styles.data}>26</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Genero</Text>
                    <Text style={styles.data}>Masculino</Text>
                </View>
            </View>

            <View style={styles.rangeContainer}>
                <Text style={styles.textoFinal}>Peso saudável para a altura:</Text>
                <Text style={styles.valorFinal}>53.5kg-72.3kg</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Botao texto={'Voltar'} rota={'/'}></Botao>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
    },
    valueContainer: {
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: '#bcf5bc',
        borderRadius: 20
    },
    value: {
        fontSize: 40,
        color: 'orange',
        fontWeight: 800
    },
    infoContainer: {
        marginVertical: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 16,
        color: 'green',
        fontWeight: 800
    },
    data: {
        fontSize: 16,
        color: 'orange',
        fontWeight: 800
    },
    rangeContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    textoFinal: {
        fontSize: 16,
        fontWeight: 800
    },
    valorFinal: {
        fontSize: 16,
        fontWeight: 800
    },
    button: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
    },
});