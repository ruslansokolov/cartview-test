import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  savings: {
    textDecorationLine: 'underline',
  },
  value: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  tip: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    zIndex: 200,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})