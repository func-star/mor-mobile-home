/***
 * created by yangxi 2018/8/5
 */
import React, { Component } from 'react'
import menusData from 'data/menus'
import classNames from 'classnames'

export default class iframe extends Component {
	componentWillMount () {
	
	}
	
	render () {
		return (
			<div className="page-iframe">
				<div className="page-iframe-header"></div>
				<div className="page-iframe-wrap w-full">
					<iframe src="http://mor.monajs.cn/docs" frameBorder="0" className="full"></iframe>
				</div>
			</div>
		)
	}
}
