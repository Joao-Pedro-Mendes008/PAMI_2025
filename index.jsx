import { View, Text, StyleSheet, Pressable } from 'react-native';
import Gender from '@/components/templateFlex'
import Botao from '@/components/botao'

export default function GenderScreen() {

  return (
    <View style={{ margin: 25, display: 'flex', alignItems: 'center'}}>
      <Text style={{ color: 'green', fontSize: 30, fontWeight: '800' }}>CALCULADOR DE <Text style={{ color: 'orange' }}>IMC</Text></Text>
      <Text style={{ fontFamily: 'monospace, monaco', marginTop: 30, fontWeight: '900', fontSize: 20, color: 'orange' }}>Selecione seu gênero:</Text>
      <View style={styles.container}>
        <Gender
          genero="Masculino"
          imagem='https://images.vexels.com/media/users/3/144540/isolated/preview/c5a58b83a85c6bf12fe6efe72cf06e67-simbolo-masculino.png'
          corTexto={'green'}
        />
        <Gender
          genero="Feminino"
          imagem='https://images.vexels.com/media/users/3/144537/isolated/preview/da60837f2c2bae390caaf87f75e8d8d7-simbolo-feminino.png'
          corTexto={'pink'}
        />
      </View>

      <Botao texto={'Continuar'} rota={'/calcScreen'} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    height: 400
  },
})



