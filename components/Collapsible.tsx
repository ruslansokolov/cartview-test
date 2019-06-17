import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Collapsible.styles'

interface Props {
  title: string
  titleExpanded: string
  showChildren: boolean
  onToggle: () => void
}

export class Collapsible extends React.Component<Props> {
  render() {
    const { title, titleExpanded, showChildren, onToggle, children } = this.props
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={onToggle} testID={'toggle-' + title}>
          <Text style={styles.text}>{showChildren ? titleExpanded : title}</Text>
          <Text style={styles.icon}>{showChildren ? '-' : '+'}</Text>
        </TouchableOpacity>
        {showChildren && children}
      </View>
    )
  }
}