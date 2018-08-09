import React, { Component } from 'react'
import PageModel from 'components/pageModel'

export default class Home extends Component {
	render () {
		const code = '(num) => num + 1'
		return (
			<PageModel name="a" desc="b" classsName="abc">{code}</PageModel>
		)
	}
}
