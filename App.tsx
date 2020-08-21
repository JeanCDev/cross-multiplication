import React, { useState } from 'react';
import { AppLoading } from 'expo';

import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { useFonts, Roboto_700Bold_Italic, Roboto_100Thin_Italic, Roboto_100Thin, Roboto_300Light, Roboto_300Light_Italic } from '@expo-google-fonts/roboto';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_700Bold_Italic,
  });

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [x, setX] = useState('');
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Regra de 3</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.inputGroup}>
            <TextInput
              onChangeText={text =>{
                setA(text);
              }}
              value={a}
              autoFocus={true}
              keyboardType="numeric"
              placeholder="A"
              style={styles.input} />

            <TextInput
              onChangeText={text =>{
                setB(text);
              }}
              value={b}
              keyboardType="numeric"
              placeholder="B"
              style={styles.input} />
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              onChangeText={text =>{
                setC(text);
              }}
              value={c}
              keyboardType="numeric"
              placeholder="C"
              style={styles.input} />

            <TextInput
              value={x}
              editable={false}
              placeholder="X"
              style={[styles.input, styles.inputDisabled]} />
          </View>

          <View style={styles.buttonGroup}>
            <RectButton 
              style={[styles.buttonClear, styles.button]}
              onPress={()=>{
                setA('')
                setB('')
                setC('')
                setX('')
              }}>
                <Text style={styles.buttonText}>Limpar</Text>
            </RectButton>

            <RectButton 
              style={[styles.buttonCalc, styles.button]}
              onPress={()=>{
                let resp = (parseFloat(b)*parseFloat(c))/parseFloat(a)
                setX(resp.toString())
              }}>
              <Text style={styles.buttonText}>Calcular</Text>
            </RectButton>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Created by JeanCDev</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}
