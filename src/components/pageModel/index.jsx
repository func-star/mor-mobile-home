import React, { Component } from 'react'
import classNames from 'classnames'
import Scene from './scene'
import Code from './code'
import Api from './api'

export default class pageModel extends Component {
	static scene = Scene
	static code = Code
	static api = Api
	
	render () {
		const {
			className,
			title,
			desc,
			children
		} = this.props
		return (
			<div className={classNames('page-model', className)}>
				<div className="page-model-title">{title}</div>
				<div className="page-model-desc">{desc}</div>
				{children}
			</div>
		)
	}
}
