import React, { Children } from "react";
import {View, Text, SafeAreaView} from 'react-native';
import style from './style';

const Card = ({titulo, children}) => {
    return (
        <>
            <View style={style.card}>
                <View>
                    <Text style={style.cardHeader}> {titulo} </Text>
                </View>
            </View>
            <View style={style.card2}>
                <Text style={style.cardContent}> {children} </Text>
            </View>
        </>
    
    );
}


export default Card;
