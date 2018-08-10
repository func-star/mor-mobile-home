import React, { Component } from 'react'
import classNames from 'classnames'
import Code from './code'
import Api from './api'

export default class pageModel extends Component {
	static code = Code
	static api = Api
	
	render () {
		const {
			className,
			title,
			children
		} = this.props
		return (
			<div className={classNames('page-model', className)}>
				<h1 className="page-model-title">{title}</h1>
				{children}
			</div>
		)
	}
}
