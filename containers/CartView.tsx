import React from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { AppState } from '../store'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ActivityIndicator, View } from 'react-native'
import { PricingData } from '../models'
import { ValidationType, ValidationError } from '../data'
import { fetchPricingData, applyPromoCode, resetError } from '../actions'
import { Collapsible, Details, PromoCode, Summary } from '../components'
import { styles } from './CartView.styles'

interface ReduxProps {
  isLoading: boolean
  pricingData: PricingData
  error: ValidationError
}

interface DispatchProps {
  fetchPricingData: typeof fetchPricingData
  applyPromoCode: typeof applyPromoCode
  resetError: typeof resetError
}

interface State {
  showSavingsTip: boolean
  showItem: boolean
  showPromoCode: boolean
  promoCode: string
}

type Props = ReduxProps & DispatchProps

export class CartView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showSavingsTip: false,
      showItem: false,
      showPromoCode: false,
      promoCode: '',
    }
  }
  
  componentDidMount() {
    this.props.fetchPricingData()
  }

  componentDidUpdate(prevProps: Props) {
    const prevData = prevProps.pricingData
    const data = this.props.pricingData
    if (this.state.promoCode && prevData && data) {
      const didApplyDiscount = !prevData.summary.discount && data.summary.discount
      if (didApplyDiscount) {
        this.setState({
          ...this.state,
          showPromoCode: false,
          promoCode: ''
        })
      }
    }
  }

  onTap = () => {
    Keyboard.dismiss()
    if (this.state.showSavingsTip) {
      this.setState({
        ...this.state,
        showSavingsTip: false,
      })
    }
  }

  onPromoCodeChange = (text) => {
    this.setState({
      ...this.state,
      promoCode: text,
    })
  }

  onPromoCodeApply = () => {
    Keyboard.dismiss()
    const code = this.state.promoCode.trim()
    if (code) {
      this.props.applyPromoCode(code)
    }
  }

  onSavingsTipToggle = () => {
    this.setState({
      ...this.state,
      showSavingsTip: !this.state.showSavingsTip,
    })
  }

  onItemToggle = () => {
    this.setState({
      ...this.state,
      showItem: !this.state.showItem,
    })
  }

  onPromoCodeToggle = () => {
    const show = !this.state.showPromoCode
    this.setState({
      ...this.state,
      showPromoCode: show,
    })
    if (!show) {
      this.props.resetError()
    }
  }

  promoCodeError = () => {
    const { error } = this.props
    if (error && error.type == ValidationType.PromoCode) {
      return error
    } else {
      return undefined
    }
  }

  render() {
    const { isLoading, pricingData } = this.props
    const promoCodeError = this.promoCodeError()
    const { promoCode, showSavingsTip, showItem, showPromoCode } = this.state
    return (
      <TouchableWithoutFeedback onPress={this.onTap}>
        <KeyboardAvoidingView 
          contentContainerStyle={styles.container} behavior="position" enabled
          onStartShouldSetResponderCapture={() => showSavingsTip}>
          {pricingData && (
            <View style={styles.summary}>
              <Summary 
                summary={pricingData.summary} showSavingsTip={showSavingsTip}
                onSavingsTipToggle={this.onSavingsTipToggle} />
              <Collapsible
                title="See item details" titleExpanded="Hide item details"
                showChildren={showItem} onToggle={this.onItemToggle}>
                <Details details={pricingData.item} />
              </Collapsible>
              <Collapsible 
                title="Apply promo" titleExpanded="Hide promo code"
                showChildren={showPromoCode} onToggle={this.onPromoCodeToggle}>
                <PromoCode code={promoCode} error={promoCodeError}
                  onCodeChange={this.onPromoCodeChange} onCodeApply={this.onPromoCodeApply} />
              </Collapsible>
            </View>
          )}
          {isLoading && (
            <ActivityIndicator style={styles.spinner} />
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state: AppState): ReduxProps => state as ReduxProps

const mapDispatchToProps = (dispatch: Dispatch) => {
   return bindActionCreators({
     fetchPricingData,
     applyPromoCode,
     resetError,
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)