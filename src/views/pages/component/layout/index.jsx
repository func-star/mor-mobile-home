import React, { Component } from 'react'
import CodeBlock from 'components/code/index'
import PageModel from 'components/pageModel/index'
import Codes from './code'
import apiData from './api'

const Use = PageModel.use
const Code = PageModel.code
const Api = PageModel.api

export default class Layout extends Component {
	render () {
		const demoList = [{
			name: '基础用法',
			desc: 'Layout 组件提供了24列栅格，通过在 Col 上 添加 span 属性设置列所占的宽度百分比',
			code: Codes.demoCode1
		}, {
			name: '基础用法',
			desc: '每列元素之间增加间隙',
			code: Codes.demoCode2
		}, {
			name: '基础用法',
			desc: 'flex布局，水平垂直居中',
			code: Codes.demoCode3
		}, {
			name: '基础用法',
			desc: 'flex布局，垂直布局',
			code: Codes.demoCode4
		}]
		return (
			<PageModel title="Layout">
				<Use>
					<CodeBlock background={true}>
						{Codes.useCode}
					</CodeBlock>
				</Use>
				<Code>
					<For of={demoList} each="item" index="index">
						<section key={index}>
							<h4 className="page-model-title-3 ">{item.name}</h4>
							<p className="page-model-desc">{item.desc}</p>
							<CodeBlock background={true}>
								{item.code}
							</CodeBlock>
						</section>
					</For>
				</Code>
				<Api data={apiData} />
			</PageModel>
		)
	}
}
