import React, { Component } from 'react'
import classNames from 'classnames'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs'

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
		const customSty = {
			color: '#000',
			lineHeight: 2,
			fontSize: '14px',
			background: '#fff',
			fontFamily: '"Lucida Console", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
		}
		return (
			<SyntaxHighlighter
				className={classNames('component-code', className)}
				style={docco}
				customStyle={customSty}
				language="javascript">
				{children}
			</SyntaxHighlighter>
		)
	}
}
