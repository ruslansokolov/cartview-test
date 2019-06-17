import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { ValidationError } from '../data'
import { styles } from './PromoCode.styles'

interface Props {
  code: string
  onCodeChange: (text: string) => void
  onCodeApply: () => void
  error?: ValidationError
}

export class PromoCode extends React.Component<Props> {
  render() {
    const { error, code, onCodeChange, onCodeApply } = this.props
    return (
      <View>
        {this.props.error && (
          <Text style={styles.error}>{error.message}</Text>
        )}
        <View style={styles.container}>
          <TextInput 
            testID="input-promo"
            style={styles.input}
            value={code} onChangeText={onCodeChange} />
          <TouchableOpacity style={styles.button} onPress={onCodeApply} testID="apply-promo">
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}