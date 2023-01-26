import { View, Text, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import styles from './style'

export default function ResultImc(props) {
  
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc
    })
  }


  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharedButton}>
  
      <Text style={styles.Information}>{props.messageResult}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>

        <TouchableOpacity 
        onPress={onShare}
        style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}