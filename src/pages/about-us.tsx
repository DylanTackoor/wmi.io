import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const GuaranteePage: FunctionComponent = () => (
	<Layout>
		<SEO title='About Us' />
		<h1>About Us</h1>

		<div>
			<h2>WHO WE ARE</h2>
			<p>
				We want to help you to find that awesome plant that will make your
				garden, backyard, home, or special place beautiful and uniquely you. We
				have hundreds of plant varieties readily available, perfect for
				enthusiasts looking for something rare, or anyone looking to bring some
				green into their lives.
			</p>
			<p>
				Our goal is to bring the largest inventory and variety of plants within
				your reach while making your purchase an easy, comfortable, and secure
				experience. Whether you’re looking for interior, native, tropical, rare
				plants, or any type, we want to make it available to you.
			</p>
			<p>
				We are passionate about nature and its beauty. This inspires us to keep
				working within the nursery and landscaping industry. Having more than 10
				years’ worth of experience in these fields, enables us to choose an
				exclusive plant catalog directly from the best nurseries, to give you
				the access to high-quality products from diverse categories, sizes and
				species. If you are looking for something and you can’t find in our shop
				please contact us and we will find it for you.
			</p>
		</div>

		<div>
			<h2>
				We make it easy for you to continue beautifying and filling your
				favorite spaces by following these simple steps:
			</h2>
			<ol>
				<li>
					<strong>Shop plant</strong>: Simply filter through our exclusive plant
					inventory of over 1,000 items, that are featured within 10 categories
					to find what you are looking for. As you discover plants that you are
					interested in, select a size that you want &amp; add it to your
					shopping cart.
				</li>
				<li>
					<strong>Check out and payment</strong>: Checking out is easy as 1,2,3,
					just login with Gmail or Facebook, next provide us your shipping
					information, and lastly pay by credit card or via PayPal.
				</li>
				<li>
					<strong>Shipping</strong>: Your order will arrive to your specified
					destination within 3-7 business days, for more information about
					shipping click here.
				</li>
				<li>
					<strong>Plant it, grow it, and enjoy it!!!</strong>
				</li>
			</ol>
		</div>
	</Layout>
)

export default GuaranteePage
