import React, { Component } from 'react'
import CodeModel from 'components/codeModel/index'
import Markdown from 'components/markdown/index'
import PageModel from 'components/pageModel/index'

const Scene = PageModel.scene
const Code = PageModel.code
const Api = PageModel.api

export default class Home extends Component {
	render () {
		const input = '# This is a header\n\nAnd this is a paragraph'
		const code = '(num) => num + 1\na = 1\nimport a from "bbb"\nstate = {\n' +
			'    size: \'large\',\n' +
			'  };'
		return (
			<PageModel title="title">
				<Markdown source={input} />
				<Code>
					<CodeModel name="a" desc="b" classsName="abc">{code}</CodeModel>
				</Code>
				<Api>api</Api>
				<Markdown source={input} />
			</PageModel>
		)
	}
}
