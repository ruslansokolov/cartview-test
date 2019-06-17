import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    flexGrow: 1,
    borderWidth: 0.5,
    borderColor: '#000000',
    marginEnd: 10,
    padding: 10,
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
    paddingStart: 10,
    paddingEnd: 10,
    height: 40,
    justifyContent: 'center',
  },
  error: {
    color: '#ff0000',
  }
})