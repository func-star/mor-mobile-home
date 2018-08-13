import React, { Component } from 'react'
import CodeBlock from 'components/code/index'
import PageModel from 'components/pageModel/index'
import Codes from './code'

const Use = PageModel.use
const Code = PageModel.code
const Api = PageModel.api

export default class Layout extends Component {
	render () {
		return (
			<PageModel title="Layout">
				<Use>
					<CodeBlock background={true}>
						{Codes.useCode}
					</CodeBlock>
				</Use>
				<Code>
					<h4 className="page-model-title-3 ">基础用法</h4>
					<p>Layout 组件提供了24列栅格，通过在 Col 上 添加 span 属性设置列所占的宽度百分比</p>
					<CodeBlock background={true}>
						{Codes.demoCode1}
					</CodeBlock>
				</Code>
				<Api>api</Api>
			</PageModel>
		)
	}
}
