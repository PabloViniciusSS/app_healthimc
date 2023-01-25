import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ResultImc from './ResultIMc'
import styles from './style'

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha seu peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function imcCalculator(){
    return setImc((weight/(height * height)).toFixed(2))
  }

  function validationImc(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual: ")
      setTextButton("Calcular Novamente")
      return
    }else
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
  }

  return (
    <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formlabel}>Altura</Text>
            <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex.1.75"
            keyboardType="numeric"
            />
            <Text style={styles.formlabel}>Peso</Text>
            <TextInput
              style={styles.input}
              onChangeText={setWeight}
              value={weight}
              placeholder="Ex.75.365"
              keyboardType="numeric"
            />
           <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
            title={textButton} >
            <Text style={styles.textbuttonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View>
      <ResultImc messageResult={messageImc} resultImc={imc} />
    </View>
  )
}