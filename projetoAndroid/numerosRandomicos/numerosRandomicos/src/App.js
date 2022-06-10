import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'; //TouchableOpacity: um botão com efeito



const App = () => { //o fragment <> serve para retornar mais de uma informação com o return.
   const [numero, setNumero] = useState(0)

    function handleNumero () {
        const novoNumero = Math.floor(Math.random () *60)
        setNumero (novoNumero)
    }
   
    return  (
    <> 
    <SafeAreaView style= {style.container}>
        <Text style={style.topo}>Sorteio de Números Aleatórios</Text>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero}>
            <Text style={style.letras}>Gerar Número</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#0abab5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero:{
        fontSize: 50,
        color: 'black',
    },
    letras:{
        backgroundColor: 'white',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 25,
        marginTop: 20,
    },
    topo:{
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        width: '100%',
    },
})