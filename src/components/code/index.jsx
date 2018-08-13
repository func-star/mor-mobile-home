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
			background,
			...props
		} = this.props
		let customSty = {
			color: '#000',
			lineHeight: 1.5,
			fontSize: '14px',
			background: background ? '#f5f7fa' : '#fff',
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
