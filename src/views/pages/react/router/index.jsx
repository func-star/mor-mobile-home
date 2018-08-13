import React, { Component } from 'react'
import Markdown from 'components/markdown/index'
import { docs } from './docs'

export default class NoMatch extends Component {
	render () {
		return (
			<div>
				<Markdown source={docs} />
			</div>
		)
	}
}
