import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PurchaseSummary } from '../models';
import { styles } from './Summary.styles'
import { formatCurrency } from '../helpers'

interface Props {
  summary: PurchaseSummary
  showSavingsTip: boolean
  onSavingsTipToggle: () => void
}

export class Summary extends React.Component<Props> {
  render() {
    const { summary, showSavingsTip, onSavingsTipToggle } = this.props 
    return (
      <View>
        <View style={styles.row}>
          <Text>Subtotal</Text>
          <Text style={styles.value}>{formatCurrency(summary.subtotal)}</Text>
        </View>
        <TouchableOpacity style={styles.row} onPress={onSavingsTipToggle} testID="toggle-savings-tip">
          <Text style={styles.savings}>Savings</Text>
          <Text style={styles.value}>{formatCurrency(summary.savings.negated())}</Text>
        </TouchableOpacity>
        {summary.discount !== undefined && (
          <View style={styles.row}>
            <Text>Discount</Text>
            <Text style={styles.value}>{formatCurrency(summary.discount.negated())}</Text>
          </View>
        )}
        <View style={styles.row}>
          <View>
            <Text>Est. taxes & fees</Text>
            <Text>(Based on {summary.zip})</Text>
          </View>
          <Text style={styles.value}>{formatCurrency(summary.tax)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.total}>Est. total</Text>
          <Text style={[styles.value, styles.total]} testID="summary-total">
            {formatCurrency(summary.total)}
          </Text>
        </View>
        {showSavingsTip && (
          <View style={styles.tip}>
            <Text>
              Picking up your order in the store helps cut costs, 
              and we pass the savings on to you.
            </Text>
          </View>
        )}
      </View>
    )
  }
}