import { Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';


export default function Botao({ texto, rota }) {
    const router = useRouter();
    const style = StyleSheet.create({
        botao: {
            marginTop: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            width: 200,
            height: 50,
            borderRadius: 16,
        }
    })

    return (
        <Pressable onPress={() => router.push(`${rota}`)}
            style={style.botao}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '900', fontFamily: 'monospace' }}>
                {texto}
            </Text>
        </Pressable>
    )
};