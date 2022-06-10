import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    page:{
      backgroundColor: '#ADD8E6',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    foto: {
      width: 150,
      height: 150,
      borderRadius: 125,
    },
    containerCabecalho: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    nome: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 10,
    },
    funcao: {
      color: '#939393',
      marginBottom: 10,
    },
    redes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%',
      marginTop: 20,
    },
    card: {
      width: '60%',
      borderWidth: 3,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      fontSize: 50,
      backgroundColor: '#00BFFF',
      flexDirection: 'column',
    },
    card2: {
        width: '70%',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        fontSize: 50,
        flexDirection: 'column',
        display: 'flex',
      },
    cardHeader: {
      fontSize: 21,
      fontWeight: 'bold',
      alignItems: 'center',
      flexDirection: 'column',
    },
    cardContent: {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      flexDirection: 'column',
      textAlign: 'left',
    },
   });
  export default style;