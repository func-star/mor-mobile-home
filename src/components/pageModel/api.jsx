import React, { Component } from 'react'
import classNames from 'classnames'

export default class Api extends Component {
	
	render () {
		const {
			className,
			children
		} = this.props
		return (
			<div className={classNames('page-model-api', className)}>
				<h2 className="page-model-title-2">API</h2>
				{children}
			</div>
		)
	}
}
