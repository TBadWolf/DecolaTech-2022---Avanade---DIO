import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import Light from './assets/icons/lampadaAcesa.png';
import Dark from './assets/icons/lampadaApagada.png';
import DioPb from './assets/icons/DIOPB.png';
import DioColor from './assets/icons/dioBranco.png';


const App = () => {
  const [toggle, setToggle] = useState(false); //abre um array para configurar o useState
  const handleOnPress = () => setToggle(oldToggle => !oldToggle); // pega o valor antigo para poder trocar de ligado para desligado, true/false}
  
  useEffect (() => {
    //liga flash do celular, quando mudar para true ou falso aciona o comando
    Torch.switchState (toggle);
    }, [toggle]);

    //efeito abaixo para mudar o toggle quando o celular for chacoalhado.
  useEffect(() => {
    const subscription = RNShake.addListener (()=> 
      setToggle(oldToggle => !oldToggle)
    );
    //função return será chamada quando o componente for desmontado
      return () => subscription.remove();
  },[]);

  return (
  <View style={toggle? style.containerLight : style.containerDark}>
    <TouchableOpacity onPress={handleOnPress}>
      <Image
        style={toggle? style.LightingOn : style.LightingOff}
        source= {toggle? (Light) : (Dark) }
      />
      <Image
        style={style.dioLogo}
        source= {toggle? (DioColor) : (DioPb) }
      />
    </TouchableOpacity>
  </View> 
  //if ternário utilizando toggle 
  //TouchableOpacity é uma transição ao clique e envolve as duas imagens que terão transição.
  
  );
};

export default App;

const style = StyleSheet.create({ 
  containerDark: { 
      backgroundColor:'black',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  containerLight: { 
    backgroundColor:'white',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    LightingOn: { 
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height:150,
  },
  LightingOff: { 
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height:150,
  },
  dioLogo: { 
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height:250,
  }, 
});