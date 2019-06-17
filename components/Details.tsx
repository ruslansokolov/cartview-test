import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './Details.styles'
import { ItemDetails } from '../models'
import { formatCurrency } from '../helpers'

interface Props {
  details: ItemDetails
}

export class Details extends React.Component<Props> {
  render() {
    const { details } = this.props
    return (
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: details.picture }} />
        <View style={styles.details}>
          <Text style={styles.name}>{details.name}</Text>
          <View style={styles.detailsRow}>
            <Text>{formatCurrency(details.price)}</Text>
            <Text>Qty: {details.quantity}</Text>
          </View>
        </View>
      </View>
    )
  }
}