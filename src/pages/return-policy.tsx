import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const ReturnsPage: FunctionComponent = () => (
	<Layout>
		<SEO title='Return Policy' />

		<h1>Return Policy</h1>
		<p>
			Due to the nature of live plants, PlantVine does not accept returns on
			material. All PlantVine plants come with a{' '}
			<Link to='/30-day-guarantee'>30 day guarantee</Link>. Read more about our{' '}
			<Link to='/30-day-guarantee'>guarantee here</Link>.
		</p>

		<h2>Canceling Your Order</h2>
		<p>
			Orders cancelled before items are shipped will receive a full refund.
			Orders cannot be cancelled once shipped. If you refuse your shipment and
			the plant makes it back to us in resaleable condition, we will refund the
			purchase price minus our cost of shipping and handling which will be
			calculated based on the package size and shipping address.
		</p>
		<p>
			Before we ship a plant, you will receive a picture of the plant we are
			shipping you. To cancel, please reply to that email, use the{' '}
			<Link to='/contact-us'>contact form</Link>, or contact us as soon as
			possible at <a href='tel:888-361-9998'>888-361-9998</a> to cancel your
			order.
		</p>

		<h2>Damaged Material in Transit?</h2>
		<p>
			In the event that your order is damaged in transit, please let us know
			within 2 business days of receiving your order. Upon confirmation that
			your material is damaged due to shipping we will replace your items at
			free of charge. *Please do not discard goods or box. You will be asked to
			provide images of damage to material and condition of material in box.
			Please <Link to='/contact-us'>contact us online</Link> or call customer
			service at <a href='tel:888-361-9998'>888-361-9998</a> and have the
			following information ready:
		</p>
		<ul>
			<li>Order #</li>
			<li>Item name/ Sku Number</li>
		</ul>
		<p>
			Upon initiating a damage claim, we will work hard to get your material
			replaced as soon as possible
		</p>
	</Layout>
)

export default ReturnsPage
