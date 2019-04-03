import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const GuaranteePage: FunctionComponent = () => (
	<Layout>
		<SEO title='30 Day Guarantee' />
		<h1>30 Day Guarantee</h1>
		<p>
			If you have properly cared for your newly purchased plants and you
			experience a loss during the first 30 days from date of delivery, please{' '}
			<Link to='/contact-us'>contact us</Link> detailing your loss, along with
			images of the plants and your original order number. You must submit 3
			images, including an image of the entire plant in its surroundings for a
			full evaluation.
		</p>
		<p>
			PlantVine will replace any plant that dies during the first 30 days for
			free however the customer is responsible for a shipping &amp; handling fee
			which can vary due to plant size and customer location. Each plant is
			eligible for only 1 replacement under this guarantee. Due to our rapidly
			changing stock we cannot guarantee that material is the same size when
			replaced.
		</p>
		<h2>What definitely voids my Guarantee?</h2>
		<ul>
			<li>
				Transplanting or repotting your plant within 7 days of receiving your
				plant. During shipping, plants go through some shock and re-planting the
				plant too soon stresses the plant too much. Wait at least 7 days before
				repotting or replanting.
			</li>
			<li>
				Planting your plant in an environment that is not conducive to that
				plant’s health, i.e., poor soil conditions, wrong light conditions, or
				outdoors in an area outside of the plants listed hardiness zone.
			</li>
			<li>
				Any destruction of plants resulting from weather, pets, wildlife,
				drought, improper application of insecticides or herbicides, fires,
				floods, or any unnatural cause, etc.
			</li>
		</ul>
		<h2>What might void my Guarantee?</h2>
		<ul>
			<li>
				Fertilizing too soon. Wait at least 2 weeks and make sure your plant is
				established in it’s new home before fertilizing.
			</li>
			<li>
				Most plants like to be watered only when the soil is dry to the touch.
				Succulents and Cacti should be watered even less frequently. Please
				lookup specific watering instruction for your plant in your area.
			</li>
		</ul>
		<h2>What’s Not Covered?</h2>
		<p>
			Plants are living things which may experience some leaf loss, along with a
			few broken or bent branches during the shipping process. Some plants are
			known to lose all leaves during shipping but will start to return within
			30 days.
		</p>
		<p>
			Note that some plants may go dormant and will shed all of their leaves.
			This is a natural process for that plant during colder seasons.
		</p>
		<p>
			Replacements due to the size of plant are not covered since images of the
			material are emailed out before shipping.
		</p>
		<h2>What about after 30 days</h2>
		<p>
			Claims received by PlantVine after 30 days of delivery will not be
			recognized. All claims must be started before the 30 days are up.
		</p>
		<h2>What if My Order Was Damaged in Transit?</h2>
		<p>
			In the event that your order is damaged in transit, please let us know
			within 2 business days of receiving your order. Upon confirmation that
			your material is damaged due to shipping we will replace your items at
			free of charge. *Please do not discard goods or box. You will be asked to
			provide images of damage to material and condition of material in box.
			Please contact us online or call customer service at{' '}
			<a href='tel:888-361-9998'>888-361-9998</a> and have the following
			information ready:
		</p>
		<ul>
			<li>Order #</li>
			<li>Item name/ Sku Number</li>
		</ul>
		<p>
			Upon initiating a damage claim, we will work hard to get your material
			replaced as soon as possible.
		</p>

		<h2>Weather Exceptions</h2>
		<p>
			In the event that material was damaged due too cold or hot temperatures
			during shipping, we will hold your replacement order until suitable
			conditions are met to safely ship your items.
		</p>

		<h2>How to start your claim</h2>
		<p>
			Send us a message using the <Link to='/contact-us'>contact form</Link>,
			include 3 pictures of your plant including at least 1 picture which
			includes the full plant in its surroundings.
		</p>

		<h2>Final Notes</h2>
		<p>PlantVine has the right to deny any claim at any time.</p>
	</Layout>
)

export default GuaranteePage
