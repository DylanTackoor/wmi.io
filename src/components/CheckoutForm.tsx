import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class CheckoutForm extends Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	async submit(ev) {
		const { token } = await this.props.stripe.createToken({ name: 'Name' })
		const response = await fetch('/charge', {
			body: token.id,
			headers: { 'Content-Type': 'text/plain' },
			method: 'POST',
		})

		if (response.ok) {
			console.log('Purchase Complete!')
		}
	}

	render() {
		return (
			<div className='checkout'>
				<p>Would you like to complete the purchase?</p>
				<CardElement />
				<button onClick={this.submit}>Send</button>
			</div>
		)
	}
}

export default injectStripe(CheckoutForm)
