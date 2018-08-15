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
			desc: <span>Layout 组件提供了<code>24列栅格</code>，通过在<code>Col</code>上添加<code>span</code>属性设置列所占的宽度百分比</span>,
			code: Codes.demoCode1
		}, {
			name: '每列元素之间增加间隙',
			desc: <span>通过<code>gutter</code>属性可以设置列元素之间的间距，默认间距为 0</span>,
			code: Codes.demoCode2
		}, {
			name: 'flex布局，水平垂直居中',
			desc: <span>通过<code>align</code>和<code>justify</code>属性可以分别设置水平方向和垂直方向的 flex 布局方式，<code>Row</code>不一定要包裹<code>Col</code></span>,
			code: Codes.demoCode3
		}, {
			name: 'flex布局，垂直布局',
			desc: <span>通过<code>direction</code>属性可以选择是 flex 水平布局还是 flex 垂直布局</span>,
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
				<Api source={apiData} />
			</PageModel>
		)
	}
}
