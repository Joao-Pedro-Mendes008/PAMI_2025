import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function NumberCard({ titulo, numero, corTitulo, corNumero }) {

    const style = StyleSheet.create({
        container: {
            gap: 8,
            padding: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            width: 150,
            backgroundColor: '#f8fce8',
            borderRadius: 20
        },
        numero: {
            fontoFamily: 'monospace',
            fontWeight: 800,
            color: `${corNumero}`,
            fontSize: 30
        },
        titulo: {
            fontoFamily: 'monospace',
            fontWeight: 800,
            color: `${corTitulo}`,
            fontSize: 12
        },
        botoes: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: 100
        },
        textoBotoes: {
            fontSize: 30,
            color: 'orange',
            fontWeight: 700,
            textAlign: 'center'
        },
        estiloBotao: {
            width: 40,
            height: 40,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100
        }
    })

    return (
        <View style={style.container}>

            <Text style={style.titulo}>
                {titulo}
            </Text>

            <Text style={style.numero}>
                {numero}
            </Text>

            <View style={style.botoes}>
                <Pressable style={style.estiloBotao}><Text style={style.textoBotoes}>+</Text></Pressable>
                <Pressable style={style.estiloBotao}><Text style={style.textoBotoes}>-</Text></Pressable>
            </View>
        </View>
    )
}