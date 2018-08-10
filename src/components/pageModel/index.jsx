import React, { Component } from 'react'
import classNames from 'classnames'
import Code from 'components/code'
import Drop from 'components/drop'

const DropTitle = Drop.title
const DropContent = Drop.content

export default class PageModel extends Component {
	render () {
		const {
			name,
			className,
			desc,
			children
		} = this.props
		return (
			<Drop className={classNames('page-model', className)} isOpen={true}>
				<DropTitle>
					<div className="page-model-title">{name}</div>
					<div className="page-model-desc flex-center-y">
						<div className="flex-1">{desc}</div>
						<div>关闭</div>
					</div>
				</DropTitle>
				<DropContent className="page-model-wrap w-full flex-1">
					<Code>{children}</Code>
				</DropContent>
			</Drop>
		)
	}
}
