import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import ResultImc from './ResultIMc'

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha seu peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function imcCalculator(){
    return setImc((weight/(height * height)).toFixed(2))
  }

  function validationIMC(){
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
    <View>
        <View>
        <Text>Altura</Text>
        <TextInput
        placeholder="Ex.1.75"
        keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex.75.365"
          keyboardType="numeric"
        />
        <Button title="Calcular IMC" />
      </View>
      <ResultImc messageResult={messageImc} resultImc={imc} />
    </View>
  )
}