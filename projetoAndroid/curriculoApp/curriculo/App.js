import React from 'react';
import {View, Image, Text, Alert, TouchableOpacity, Linking, SafeAreaView  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './profile.jpg';
import Card from './components/card/index';
import style from './components/card/style';


const Github = 'https://github.com/TBadWolf'
const Facebook= 'https://www.facebook.com/barbara.esteves.790'
const Linkedin= 'https://www.linkedin.com/in/barbara-esteves-6aa27a134/'

const App = () => {

  function handleRedes (redeSocial) {

    switch(redeSocial){
      case 'linkedin':
          Alert.alert ('Meu Linkedin','https://www.linkedin.com/in/barbara-esteves-6aa27a134/')
          Linking.openURL(Linkedin);
        break
      case 'github':
          Alert.alert ('Meu Github','https://github.com/TBadWolf')
          Linking.openURL(Github);
      break
      case 'facebook':
        Alert.alert ('Meu Facebook', 'https://www.facebook.com/barbara.esteves.790')
        Linking.openURL(Facebook);
      break
      case 'whatsapp':
        Alert.alert ('Meu Telefone/Whatsapp', '+55 11 967512631')
      break
    }
  }

  return (
    <>
    <View style={style.page}>
      <View style={style.containerCabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>Barbara Esteves</Text>
        <Text style={style.funcao}>Iniciante em Desenvolvimento Mobile</Text>
          <View style={style.redes}>
            <TouchableOpacity onPress ={() => handleRedes ('github')}>
            <Icon name= "github" size={40}/>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => handleRedes ('facebook')} >
            <Icon name= "facebook" size={40}/>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => handleRedes ('linkedin')}>
            <Icon name= "linkedin" size={40}/>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => handleRedes ('whatsapp')}>
            <Icon name= "phone" size={40}/>
            </TouchableOpacity>
          </View>

      
            <Card titulo= "Experiencia Profissional">
                <Text> - Prefeitura Municipal de Guarulhos  </Text>
                <Text> - Motospirit Importação ltda  </Text>
                <Text> - Espaço Aduana Importação ltda  </Text>
                </Card>
          
            
         
            <Card titulo= "Formação Academica">
              <Text>- Análise e Desenv. de Sistemas - FAM </Text>
              <Text>- Comércio Exterior - Uninove  </Text>
            </Card>
            </View>            
      </View>  
        
    </>
   );
};

export default App;