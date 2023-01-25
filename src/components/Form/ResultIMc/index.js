import { View, Text, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import styles from './style'

export default function ResultImc(props) {
  
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.result
    })
  }


  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharedbutton}>
        {
          props.resultImc != null ?
        <TouchableOpacity style={styles.shared}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
        :
        <View />
        } 
      </View>
        <Text style={styles.Information}>{props.messageResult}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  )
}