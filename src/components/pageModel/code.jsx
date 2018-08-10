import React, { Component } from 'react'
import classNames from 'classnames'

export default class Code extends Component {
	
	render () {
		const {
			className,
			children
		} = this.props
		return (
			<div className={classNames('page-model-code', className)}>
				{children}
			</div>
		)
	}
}
