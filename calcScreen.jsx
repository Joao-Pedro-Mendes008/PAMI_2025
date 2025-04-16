import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import SliderAltura from '../../components/sliderAltura';

import NumberCard from '../../components/numberCards';
import Botao from '../../components/botao';

export default function CalcScreen() {

  return (
    <View style={{ margin: 25, display: 'flex', alignItems: 'center'}}>

      <Text style={{ color: 'green', fontSize: 30, fontWeight: '800' }}>CALCULADOR DE <Text style={{ color: 'orange' }}>IMC</Text></Text>

      <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>

        <NumberCard titulo={'Peso(kg)'} numero={'67'} corTitulo={'grey'} corNumero={'orange'}></NumberCard>
        <NumberCard titulo={'Idade'} numero={'26'} corTitulo={'grey'} corNumero={'orange'}></NumberCard>
        <View style={{ width: 320, backgroundColor: '#f8fce8', borderRadius: 20 }}>
          <SliderAltura titulo={'Altura(cm)'} />
        </View>
      </View>

      <Botao texto={'Calcular'} rota={'/resultScreen'} />


    </View>
  );
}
