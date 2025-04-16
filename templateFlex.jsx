import { View, Text, StyleSheet, Image } from "react-native";

export default function Gender({ genero, imagem, corTexto }) {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: 400,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 40,
            backgroundColor: '#f8fce8',
            borderRadius: 16
        },
        texto: {
            textAlign: 'center',
            fontFamily: 'monospace',
            fontSize: 25,
            fontWeight: '800',
            width: 130,
            color: `${corTexto}`,
        }
    })

    return (
            <View style={styles.container}>
                <Text style={styles.texto}>{genero}</Text>
                <Image source={{ uri: `${imagem}` }}
                    style={{ width: 100, height: 100, margin: 25}} />
            </View>
    )
}