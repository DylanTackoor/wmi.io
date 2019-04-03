import css from '@emotion/css'
import React, { FunctionComponent } from 'react'

const cardStyles = css`
	background-color: lightgray;
	transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	&:hover {
		transform: translateY(-8px);
	}
`

interface ICard {
	title: string
	image?: {
		url: string
		alt: string
	}
}

export const Card: FunctionComponent<ICard> = ({ title, image, children }) => (
	<div css={cardStyles}>
		{image && image.url && image.alt && (
			<img height='80px' src={image.url} alt={image.alt} />
		)}
		<h1>{title}</h1>
		{children}
	</div>
)
