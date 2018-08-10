import React, { Component } from 'react'
import CodeModel from 'components/codeModel/index'
import PageModel from 'components/pageModel/index'

const Scene = PageModel.scene
const Code = PageModel.code
const Api = PageModel.api

export default class Home extends Component {
	render () {
		const code = '(num) => num + 1\na = 1\nimport a from "bbb"\nstate = {\n' +
			'    size: \'large\',\n' +
			'  };'
		return (
			<PageModel>
				<Scene>Scene</Scene>
				<Code>
					<CodeModel name="a" desc="b" classsName="abc">{code}</CodeModel>
				</Code>
				<Api>api</Api>
			</PageModel>
		)
	}
}
