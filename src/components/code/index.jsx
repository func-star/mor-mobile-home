import React, { Component } from 'react'
import classNames from 'classnames'
import SyntaxHighlighter from 'react-syntax-highlighter'

export default class Code extends Component {
	static defaultProps = {
		code: ''
	}
	
	render () {
		const {
			children,
			className,
			...props
		} = this.props
		return (
			<SyntaxHighlighter
				className={classNames('component-code', className)}
				customStyle={{background: '#fff'}}
				language="javascript">
				{children}
			</SyntaxHighlighter>
		)
	}
}
