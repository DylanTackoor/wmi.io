import { Component } from 'react'

export = CMS

interface IEditorComponentOptions {
	/** Internal id of the component */
	id: string

	/** Visible label */
	label: string

	/** Fields the user need to fill out when adding an instance of the component */
	fields: Array<{ name: string; label: string; widget: string }>

	/**
	 * Preview output for this component. Can either be a string or a React component
	 * (component gives better render performance)
	 */
	toPreview: (obj: string | Component) => string

	/** Pattern to identify a block as being an instance of this component */
	pattern: RegExp

	/** Function to extract data elements from the regexp match */
	fromBlock: (match: any) => any

	/** Function to create a text block from an instance of this component */
	toBlock: (obj: any) => any
}

declare const CMS: {
	registerWidget: (
		/** 1 */
		name: string,
		/** 2 */
		control: Component | string,
		/** 3 */
		preview?: Component
	) => any

	registerEditorComponent: (config: IEditorComponentOptions) => any
}
