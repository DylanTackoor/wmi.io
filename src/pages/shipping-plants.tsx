import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const ShippingPage: FunctionComponent = () => (
	<Layout>
		<SEO title='Shipping Plants' />
		<h1>Shipping Plants</h1>
		<p>
			Our mission at PlantVine is to hand select premium, healthy plants from
			our network of local growers and have them quickly arrive at your door in
			optimum condition.
		</p>

		<h2>SHIPPING COSTS:</h2>
		<ul>
			<li>Free shipping on all orders over $100.</li>
			<li>
				A flat rate of only $18 is charged for orders totaling less than $100.
			</li>
		</ul>

		<h2>HERE’S HOW IT WORKS:</h2>
		<ol>
			<li>Once you place your order, you’ll receive an email confirmation.</li>
			<li>
				A member of our professional team will then hand-select your plant(s)
				from our grower network.
			</li>
			<li>
				Next, you’ll receive images of your plant(s) as we ready it to ship to
				you.
			</li>
			<li>
				In the event you are not pleased with the plant we’ve selected, please
				contact us immediately. This must be done in a timely manner, as the
				plant(s) may ship as soon as one day after the photo email is sent. You
				can call us at{' '}
				<strong>
					<a href='tel:888-361-9998'>888-361-9998</a>
				</strong>{' '}
				or email us at{' '}
				<strong>
					{/* TODO: add default subject */}
					<a href='mailto:info@plantvine.com'>info@plantvine.com</a>
				</strong>
			</li>
			<li>
				We meticulously hand pack each box to ensure plants arrive in pristine
				condition.
			</li>
			<li>
				We currently ship plants in 1, 3 and 7 gallon sizes (the equivalent of
				6” to 14” pot diameters). Though we do our best to fit the largest
				possible plant in the shipping boxes, if your plant exceeds the standard
				box dimensions, we may trim it accordingly. This will not harm your
				plant and will, in fact, promote new growth.
			</li>
			<li>
				Currently, we ship anywhere in the continental United States, excluding
				Alaska and Hawaii.
			</li>
			<li>
				If we learn the shipping time of your order will be longer than normal,
				we may hold off shipping until a later day to reduce the time your plant
				is in transit. For instance, orders in which the shipping interval spans
				a weekend may be held until the following week. We may also delay
				shipping due to weather conditions en route that could damage your
				plant. e.g., extreme cold or heat. We will notify you should this be the
				case.
			</li>
			<li>
				All orders are sent via FedEx and originate from our South Florida
				facility.
			</li>
			<li>
				You’ll receive an email detailing tracking information once your package
				leaves our facility.
			</li>
			<li>
				If you live in a colder climate, and the delivery date forecast calls
				for freezing temperatures, we suggest someone be at your home to collect
				the plant immediately upon delivery. This will prevent harmful exposure
				to extreme temperatures.
			</li>
			<li>
				On delivery day, you’ll receive an email with delivery confirmation.
				Please note, do not be concerned if you discover your plant has some
				brown leaves when you open the box. This may occur normally during
				shipping.
			</li>
		</ol>

		<h2>YOUR COMPLETE SATISFACTION IS BACKED BY OUR 30 DAY GUARANTEE</h2>
		<p>
			From your initial order to delivery at your door, we work to ensure your
			complete satisfaction.{' '}
			<Link to='/30-day-guarantee'>
				Click here to learn about our 30 day guarantee
			</Link>
			.
		</p>
	</Layout>
)

export default ShippingPage
