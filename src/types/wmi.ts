/** TODO: document this */
export interface IPost {
	html: string
	frontmatter: {
		date: string
		slug: string
		title: string
	}
}

/** TODO: document this */
export interface IProduct {
	id: string
	name: string
	metadata: {
		Categories: string
		Tags: string
		Zones: string
	}
}

/** TODO: document this */
export interface ISKU {
	id: string
	price: number
	attributes: {
		pot: string
	}
}

/** TODO: document this */
export interface IFaq {
	html: string
	frontmatter: {
		title: string
		order: number
	}
}
