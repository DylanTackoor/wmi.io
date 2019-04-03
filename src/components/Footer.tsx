import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

// Elements
const FooterContainer = styled('footer')`
	background-color: #23282d;
	color: #a8a6aa;
`

export const Footer: FunctionComponent = () => (
	<FooterContainer>
		{/* Top half */}
		<div>
			<div>
				<p>HEADQUARTERS</p>
				<p>
					3401 N. Miami Avenue
					<br />
					Suite 239
					<br />
					Miami, Florida 33127
					<br />
					USA
				</p>
			</div>
			<div>
				<p>CONTACT US</p>
				<Link to='/offices#miami'>Miami Office</Link>
				<br />
				<Link to='/offices#honolulu'>Honolulu Office</Link>
				<br />
				<Link to='/offices#los-angeles'>Los Angeles Office</Link>
			</div>
			<div>
				<p>MESSAGE US</p>
				<p>
					Do you have a question, an idea to run by us, or simply want to know
					more about us?
				</p>
				<p>
					<Link to='/contact'>Start Your Message</Link>
				</p>
			</div>

			{/* Bottom Half */}
			<div>
				{/* Legal Links */}
				<div>
					<p>© 2019 Worldmedia Interactive.</p>
					<p>
						{/* TODO: Don't hardcode these links */}
						<Link to='/terms'>Terms &amp; Conditions</Link> |{' '}
						<Link to='/privacy'>Privacy Policy</Link>
					</p>
				</div>

				{/* Social media */}
				<div>
					{/* TODO: replace with OutboundLink */}
					<a href='/'>Twitter</a>
					<a href='/'>Facebook</a>
					<a href='/'>LinkedIn</a>
					<a href='/'>Instagram</a>
				</div>
			</div>
		</div>
	</FooterContainer>
)
