import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'

// export default function() {
//     return (
//       <View style={styles.container}>
//           <Text style={styles.f20}>App Função!</Text>
//       </View>
//     )
// }

export default class App extends Component {
    render() {
      return (
        // <View style={styles.container}>
        //     <Text style={styles.f20}>App!</Text>
        // </View>
        <View style={styles.container}>
            <Simples texto='Flexível!!!'/>
            <ParImpar numero={38} />
            <Inverter texto='React Nativo!' />
            <MegaSena numeros={6} />
        </View>
      )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    // f20: {
    //   fontSize: 40
    // }
})