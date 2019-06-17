import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' 
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './store'
import CartView from './containers/CartView'
import { styles } from './App.styles'

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <CartView />
      </View>
    )
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
