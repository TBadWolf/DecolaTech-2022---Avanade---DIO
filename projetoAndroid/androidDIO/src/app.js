import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorfontGit = '#C9D1D9';
const imageProfile = 'https://avatars.githubusercontent.com/u/104402057?v=4';
const UrlPerfil = 'https://github.com/TBadWolf';
const Linkedin = 'https://www.linkedin.com/in/barbara-esteves-6aa27a134/';
const DIO = 'https://web.dio.me/users/barbara_rce?tab=achievements';


const app = () => {

    const handlePressGoToGitHub = async () => {
        console.log('Verificando link');
       const res = await  Linking.canOpenURL (UrlPerfil);
        if(res){
        console.log('Link aprovado');
        console.log('Abrindo o link...');
          await Linking.openURL(UrlPerfil);
       }
    }
       const handlePressGoToLinkedin = async () => {
        console.log('Verificando link');
       const res = await  Linking.canOpenURL (Linkedin);
        if(res){
        console.log('Link aprovado');
        console.log('Abrindo o link...');
          await Linking.openURL(Linkedin);
       }
    }
    const handlePressGoToDIO = async () => {
        console.log('Verificando link');
       const res = await  Linking.canOpenURL (DIO);
        if(res){
        console.log('Link aprovado');
        console.log('Abrindo o link...');
          await Linking.openURL(DIO);
       }
    };
    return ( // os comentos abaixo como style = {} adicionam os objetos de estilo configurados abaixo, no barStyle altera a cor da barra de cima, selecionando a cor PINK no caso.
    <SafeAreaView style ={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle= "light-content" /> 
        <View style={style.content}> 
            <Image style={style.avatar} source={{uri:imageProfile }}/>
            <Text style={[style.defaultText, style.nameText]}>Barbara Esteves</Text> 
            <Text style={[style.defaultText, style.nickname]}>TBadWolf</Text>
            <Text style={style.defaultText}>Iniciante em Software Development</Text>
            <Pressable onPress={handlePressGoToGitHub}>
            <View style={style.button}>
                <Text style={[style.defaultText]}>Open in Github</Text>
            </View>
            </Pressable>
            <Pressable onPress={handlePressGoToLinkedin}>
            <View style={style.button}>
                <Text style={[style.defaultText]}>Open in Linkedin</Text>
            </View>
            </Pressable>
            <Pressable onPress={handlePressGoToDIO}>
            <View style={style.button}>
                <Text style={[style.defaultText]}>Open in DIO Profile</Text>
            </View>
            </Pressable>
        </View>
    </SafeAreaView>//protege o componente de sair para uma área que não tem acesso
    );
};

export default app;

const style = StyleSheet.create({ //abrindo objetos para estilização da página
    container: { //estilizando o View
        backgroundColor: colorGithub,//colocando cor no background
        flex:1, //para deixar a tela toda rosa
        justifyContent: 'flex-start',
    },
    content:{//estilo do conteúdo da página
        alignItems: 'center',
        pading: 20,
    },
    defaultText: { //estilizando texto
        fontSize: 25,
        color: '#4F565E',
    },
    nameText: { //usando o defaultText como array junto com este, altera o texto para essas configs
        fontSize: 40,
        fontWeight: 'bold',
        color: colorfontGit, 
    },
    nickname: {
        fontSize: 30, 
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,

    },
    button: {//criando um botão no segundo VIEW, linha 17.
        marginTop:20,
        backgroundColor: colorfontGit,
        borderRadius: 10,
        padding: 20,
        
    },
});