import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function ResultImc(props) {
  return (
    <View style={styles.resultImc}>
        <Text style={styles.Information}>{props.messageResult}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  )
}