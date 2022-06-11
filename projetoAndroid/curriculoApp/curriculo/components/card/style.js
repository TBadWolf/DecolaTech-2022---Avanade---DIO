import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    page:{
      backgroundColor: '#ADD8E6',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    foto: {
      width: 170,
      height: 170,
      borderRadius: 125,
      borderWidth: 3,
      borderColor: 'white',
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
      fontSize: 20,
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
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      fontSize: 50, 
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
      display: 'flex',
      textAlign: 'center',
    },
   });
  export default style;