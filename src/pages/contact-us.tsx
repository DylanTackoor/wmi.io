import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const GuaranteePage: FunctionComponent = () => (
	<Layout>
		<SEO title='Contact Us' />
		<h1>Contact Us</h1>

		<div>
			<h2>GET IN TOUCH</h2>
			<form action='' />
		</div>

		<div>
			<h2>Locations</h2>
			<p>PlantVine only ships plants and does not have pickup locations.</p>

			<h2>Call Us</h2>
			<p>
				Currently our customer service agents are available to speak with you
				over the phone Monday to Friday from 10am to 2:30pm EST
			</p>
			<p>
				Phone: <a href='tel:888-361-9998'>888-361-9998</a>
			</p>
			<p>Monday to Friday: 9am to 4:30pm EST</p>

			<h2>Text</h2>
			<p>
				This number is only for texting us images. We do not answer this number
				if called.
			</p>
			<p>
				Text (SMS): <a href='sms:954-590-0326'>954-590-0326</a>
			</p>
		</div>
	</Layout>
)

export default GuaranteePage
