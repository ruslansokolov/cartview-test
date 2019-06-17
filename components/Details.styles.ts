import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  details: {
    flex: 2,
    flexWrap: 'wrap'
  },
  name: {
  },
  detailsRow: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})