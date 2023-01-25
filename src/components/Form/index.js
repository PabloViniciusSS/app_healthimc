import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import ResultImc from './ResultIMc'

export default function Form({messageIMC, imc}) {
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
      <ResultImc messageResult={messageIMC} resultImc={imc} />
    </View>
  )
}