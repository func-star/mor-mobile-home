import React, { Component } from 'react'
import classNames from 'classnames'

export default class scene extends Component {
	
	render () {
		const {
			className,
			children
		} = this.props
		return (
			<div className={classNames('page-model-scene', className)}>
				{children}
			</div>
		)
	}
}
